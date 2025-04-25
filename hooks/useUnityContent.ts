import UnityContent from "@/lib/react-unity-webgl/UnityContent"; // Assuming path relative to hook file
import IUnityConfig from "@/lib/react-unity-webgl/interfaces/IUnityConfig";
import UnityLoaderService from "@/lib/react-unity-webgl/services/UnityLoaderService";
import { loggingService } from "@/lib/react-unity-webgl/services/LoggingService"; // Assuming path
import { useState, useRef, useEffect, useCallback, useMemo } from "react";

declare global {
	interface Window {
		ReactUnityWebGL: any;
		UnityLoader: any;
	}
}

// --- Helper Service (Singleton Pattern) ---
// Ensures we only have one instance of the loader service logic
const unityLoaderService = new UnityLoaderService();

// --- Hook Return Type ---
interface UseUnityInstanceResult {
	/** The UnityContent instance associated with this hook. */
	unityContent: UnityContent;
	/** The underlying UnityInstance once loaded, or null. */
	unityInstance: UnityInstance | null;
	/** The loading progression (0 to 1). */
	loadingProgression: number;
	/** Whether the Unity instance has finished loading. */
	isLoaded: boolean;
	/** Any error message encountered during loading or runtime. */
	error: string | null;
	/** The unique HTML element ID for the Unity container div. */
	htmlElementId: string;

	/** Stable function to send a message to Unity. */
	sendMessage: (
		gameObjectName: string,
		methodName: string,
		parameter?: any,
	) => void;
	/** Stable function to set the fullscreen mode. */
	setFullscreen: (fullscreen: boolean) => void;
	/** Stable function to attempt unloading the Unity instance. */
	unload: () => Promise<void>;
	/** Stable function to add an event listener. */
	addEventListener: (eventName: string, callback: Function) => void;
	/** Stable function to remove an event listener. */
	removeEventListener: (eventName: string, callback: Function) => void;
}

// --- The Hook ---
/**
 * Manages a Unity WebGL instance within a React component.
 *
 * @param buildJsonPath Path to the Unity build JSON file.
 * @param unityLoaderJsPath Path to the UnityLoader.js file.
 * @param unityConfig Optional configuration for the Unity instance.
 * @returns An object containing state and functions to interact with the Unity instance.
 */
export function useUnityInstance(
	buildJsonPath: string,
	unityLoaderJsPath: string,
	unityConfig?: IUnityConfig,
): UseUnityInstanceResult {
	// --- State ---
	const [unityContent] = useState(
		() => new UnityContent(buildJsonPath, unityLoaderJsPath, unityConfig),
	);
	const [unityInstance, setUnityInstance] = useState<UnityInstance | null>(
		null,
	);
	const [loadingProgression, setLoadingProgression] = useState<number>(0);
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);
	const [htmlElementId] = useState(
		() => `__ReactUnityWebGL_${unityContent.uniqueID}__`,
	);

	// Store listeners added via the hook to ensure proper cleanup
	const eventListenersRef = useRef<Map<string, Set<Function>>>(new Map());

	// --- Effects ---

	// Effect for initializing and cleaning up the Unity instance
	useEffect(() => {
		let isMounted = true;
		let currentUnityInstance: UnityInstance | null = null;

		const handleProgress = (progression: number) => {
			if (isMounted) {
				setLoadingProgression(progression);
			}
		};

		const handleLoaded = () => {
			if (isMounted) {
				setIsLoaded(true);
				// Reset error state on successful load
				setError(null);
			}
		};

		const handleError = (message: string) => {
			if (isMounted) {
				setError(`Unity Error: ${message}`);
				console.error("React Unity WebGL Hook - Unity Error:", message);
				// Stop loading indication on error
				setIsLoaded(false);
				setLoadingProgression(0);
			}
		};

		const handleQuit = () => {
			if (isMounted) {
				console.log("React Unity WebGL Hook - Unity Instance Quitted");
				// Reset state after quit
				setIsLoaded(false);
				setLoadingProgression(0);
				setUnityInstance(null);
				setError(null);
				currentUnityInstance = null;
			}
		};

		// Register internal listeners
		unityContent.on("progress", handleProgress);
		unityContent.on("loaded", handleLoaded);
		unityContent.on("error", handleError);
		unityContent.on("quitted", handleQuit);

		// Load the Unity Loader script and instantiate the player
		unityLoaderService.append(unityContent.unityLoaderJsPath, () => {
			if (!isMounted || typeof window.UnityLoader === "undefined") {
				if (isMounted) {
					const errMsg = "UnityLoader script failed to load or is not defined.";
					setError(errMsg);
					loggingService.errorUnityLoaderNotFound(
						unityContent.unityLoaderJsPath,
					);
				}
				return;
			}

			// Set global error handler *before* instantiation
			// Note: This is global, subsequent hook instances might overwrite it.
			window.UnityLoader.Error.handler = (message: string) => {
				// Route UnityLoader specific errors through our handler
				handleError(message);
			};

			try {
				const instance = window.UnityLoader.instantiate(
					htmlElementId,
					unityContent.buildJsonPath,
					{
						// Use internal progress handler from UnityContent which triggers 'progress'/'loaded' events
						onProgress: (instance: UnityInstance, progression: number) => {
							unityContent.triggerUnityEvent("progress", progression);
							if (progression === 1) unityContent.triggerUnityEvent("loaded");
						},
						Module: unityContent.unityConfig.modules,
						streamingAssetsUrl: unityContent.unityConfig.streamingAssetsUrl,
						// Let the container div control the size initially
						width: "100%",
						height: "100%",
					},
				);
				currentUnityInstance = instance;
				unityContent.setUnityInstance(instance); // Link instance to UnityContent
				if (isMounted) {
					setUnityInstance(instance); // Update hook state
				}
			} catch (instantiationError: any) {
				handleError(
					instantiationError?.message || "Failed to instantiate Unity",
				);
				console.error(
					"React Unity WebGL Hook - Instantiation Error:",
					instantiationError,
				);
			}
		});

		// Cleanup function
		return () => {
			isMounted = false;
			console.log(
				"React Unity WebGL Hook - Cleaning up instance:",
				unityContent.uniqueID,
			);

			// Attempt to quit the instance
			// Use the stored 'currentUnityInstance' as state update might be async
			const instanceToQuit = currentUnityInstance || unityInstance;
			if (instanceToQuit && typeof instanceToQuit.Quit === "function") {
				instanceToQuit.Quit(() => {
					console.log(
						"React Unity WebGL Hook - Unity Quit callback received for instance:",
						unityContent.uniqueID,
					);
					// Explicitly clear instance reference in UnityContent on successful quit
					unityContent.setUnityInstance(undefined as any);
				});
			} else {
				// Fallback or older Unity versions - Log warning
				if (instanceToQuit) {
					// Only warn if we thought we had an instance
					loggingService.warnUnityContentRemoveNotAvailable();
				}
				// Manually clear instance association if Quit is not available
				unityContent.setUnityInstance(undefined as any);
			}

			// Clean up global event handlers created by *this hook's* addEventListener calls
			// Note: This assumes the event names were unique enough or managed carefully
			// if multiple hook instances use the same event names.
			eventListenersRef.current.forEach((callbacks, eventName) => {
				if (
					(window as any).ReactUnityWebGL &&
					(window as any).ReactUnityWebGL[eventName]
				) {
					delete (window as any).ReactUnityWebGL[eventName];
					console.log(
						`React Unity WebGL Hook - Cleaned up global listener for "${eventName}"`,
					);
				}
			});
			eventListenersRef.current.clear();

			// It's harder to reliably remove the internal listeners added via
			// unityContent.on because UnityContent itself doesn't provide an 'off' method
			// to remove specific callbacks from its internal array. Relying on the instance
			// cleanup (Quit) is the primary mechanism here.

			// Clear the global error handler if this was the last instance (difficult to track reliably)
			// Consider leaving it or making it no-op if robustness across multiple instances is critical.
			// if (window.UnityLoader && window.UnityLoader.Error.handler === handleError) {
			//   window.UnityLoader.Error.handler = () => {}; // Reset to default/noop
			// }
		};
	}, [unityContent, htmlElementId]); // Dependencies ensure this runs once per hook instance

	// --- Interaction Functions (Memoized) ---

	const sendMessage = useCallback(
		(gameObjectName: string, methodName: string, parameter?: any): void => {
			if (unityInstance && isLoaded) {
				unityContent.send(gameObjectName, methodName, parameter);
			} else {
				console.warn(
					`React Unity WebGL Hook: Cannot send message; Unity instance not ready (isLoaded: ${isLoaded}, instance: ${!!unityInstance})`,
				);
			}
		},
		[unityContent, unityInstance, isLoaded], // Recreate if these change
	);

	const setFullscreen = useCallback(
		(fullscreen: boolean): void => {
			if (unityInstance) {
				unityContent.setFullscreen(fullscreen);
			} else {
				console.warn(
					"React Unity WebGL Hook: Cannot set fullscreen; Unity instance not available.",
				);
			}
		},
		[unityContent, unityInstance], // Recreate if these change
	);

	const unload = useCallback(async (): Promise<void> => {
    return new Promise((resolve, reject) => {
        if (!unityInstance) {
            console.warn(
                "React Unity WebGL Hook: Cannot unload; Unity instance not available.",
            );
            resolve(); // Resolve immediately if no instance
            return;
        }
        if (typeof unityInstance.Quit === "function") {
            // Add a temporary listener for the 'quitted' event triggered by UnityContent.remove/Quit
            const handleQuitOnce = () => {
                resolve();
            };
            unityContent.on("quitted", handleQuitOnce);
            unityContent.remove(); // This calls unityInstance.Quit internally

            //Add a timeout in case the quitted event is not fired.
            const timeOutId = setTimeout(()=>{
                unityContent.off("quitted", handleQuitOnce);
                resolve();
            }, 5000);

            const offQuitted = ()=>{
                unityContent.off("quitted", handleQuitOnce);
                clearTimeout(timeOutId);
            }

            //modify the handleQuitOnce function to clear the listener.
            const newHandleQuitOnce = ()=>{
                handleQuitOnce();
                offQuitted();
            }

            unityContent.off("quitted", handleQuitOnce);
            unityContent.on("quitted", newHandleQuitOnce);

        } else {
            loggingService.warnUnityContentRemoveNotAvailable();
            // If Quit is not available, we can't gracefully unload.
            // We still call unityContent.remove() as it might do *something* internally,
            // but we resolve immediately as there's no callback mechanism.
            unityContent.remove();
            resolve();
        }
		});
	}, [unityContent, unityInstance]);
	
	const addEventListener = useCallback(
		(eventName: string, callback: Function) => {
			let callbacks = eventListenersRef.current.get(eventName);
			if (!callbacks) {
				callbacks = new Set();
				eventListenersRef.current.set(eventName, callbacks);

				// Register the *single* global handler via UnityContent the first time
				// an event listener for this name is added *by this hook*.
				// This handler will dispatch to all callbacks in the Set.
				unityContent.on(eventName, (parameter: any) => {
					// Dispatch to all registered listeners for this event
					eventListenersRef.current.get(eventName)?.forEach((cb) => {
						try {
							cb(parameter);
						} catch (e) {
							console.error(
								`React Unity WebGL Hook: Error in event listener for "${eventName}":`,
								e,
							);
						}
					});
				});
			}
			callbacks.add(callback);
		},
		[unityContent], // Depends only on unityContent instance
	);

	const removeEventListener = useCallback(
		(eventName: string, callback: Function) => {
			const callbacks = eventListenersRef.current.get(eventName);
			if (callbacks) {
				callbacks.delete(callback);
				// Optional: If callbacks set is empty, we could *try* to remove the global
				// handler, but UnityContent doesn't support 'off'. The cleanup effect
				// handles removing the global handler on unmount.
				// if (callbacks.size === 0) {
				//   eventListenersRef.current.delete(eventName);
				//   // Cannot reliably delete the global handler here without 'off'
				// }
			}
		},
		[], // No dependencies needed as it only interacts with the ref
	);

	// --- Return Value (Memoized) ---
	const value = useMemo(
		() => ({
			unityContent,
			unityInstance,
			loadingProgression,
			isLoaded,
			error,
			htmlElementId,
			sendMessage,
			setFullscreen,
			unload,
			addEventListener,
			removeEventListener,
		}),
		[
			unityContent,
			unityInstance,
			loadingProgression,
			isLoaded,
			error,
			htmlElementId,
			sendMessage,
			setFullscreen,
			unload,
			addEventListener,
			removeEventListener,
		],
	);

	return value;
}
