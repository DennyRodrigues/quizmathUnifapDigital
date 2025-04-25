"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { vlibrasService } from "@/services/vlibrasApi";

import {
	CONFIG_URL,
	DICTIONARY_URL,
	GAME_OBJECTS,
	UNITY_BUILD_JSON_PATH,
	UNITY_CONSTS,
	UNITY_LOADER_PATH,
} from "@/constants/player";
import { useUnityInstance } from "@/hooks/useUnityContent";
import { toBoolean } from "@/lib/utils";
import { Loader } from "lucide-react"; // For loading indicator
import { AvatarControls } from "../AvatarControlButtons/AvatarControlButtons";
import { PlayerControls } from "../PlayControlButtons/PlayControlButtons";

interface LibrasCardProps {
	textToTranslate: string;
	className?: string;
	initialAvatar?: "icaro" | "hozana" | "guga";
	initialShowSubtitle?: boolean;
	// Removed onClose as it wasn't used, add back if needed
}

// Define expected structure of the payload from onPlayingStateChange
// Match the order defined in the original global function comment
interface PlayingStatePayload {
	isPlaying: string; // "True" or "False"
	isPaused: string; // "True" or "False"
}
// Player State Enum - Defines all possible states
type PlayerState =
	| "UNINITIALIZED" // Before hook starts loading
	| "LOADING" // Unity assets/runtime are loading
	| "LOAD_ERROR" // Hook reported an error during load
	| "CONFIGURING" // Unity loaded, sending initial messages
	| "READY" // Unity loaded & configured, idle. Ready for new translation or replay. Also the state after playback finishes.
	| "TRANSLATING" // API call to vlibrasService in progress (fetching new gloss)
	| "PLAYING" // Unity is actively playing the signs
	| "PAUSED" // Unity playback is paused
	| "TRANSLATION_ERROR"; // Error during API call or sending PLAY_NOW command

// Global functions Unity might call (Workaround)
declare global {
	interface Window {
		onPlayingStateChange?: (payload: PlayingStatePayload | string) => void;
		CounterGloss?: (counter: number, glossLength: number) => void;
	}
}

export function LibrasCard({
	textToTranslate,
	className = "",
	initialAvatar = "icaro",
	initialShowSubtitle = true,
}: LibrasCardProps) {
	// --- Unity Instance Management via Hook ---
	const {
		// REMOVED: unityProvider (no longer needed for <Unity> component)
		unityInstance,
		isLoaded,
		loadingProgression,
		error,
		sendMessage,
		addEventListener,
		removeEventListener,
		htmlElementId, // Use this for the container div ID
		// Ensure unload and setFullscreen are destructured if needed elsewhere
	} = useUnityInstance(UNITY_BUILD_JSON_PATH, UNITY_LOADER_PATH, {
		adjustOnWindowResize: true,
	});

	// --- State Management ---
	const [playerState, setPlayerState] = useState<PlayerState>("UNINITIALIZED");
	// --- Application State for Player UI ---
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [isPaused, setIsPaused] = useState<boolean>(false);
	const [hasFinished, setHasFinished] = useState<boolean>(false);
	const [isShowSubtitle, setIsShowSubtitle] =
		useState<boolean>(initialShowSubtitle);
	const [currentAvatar, setCurrentAvatar] = useState<
		"icaro" | "hozana" | "guga"
	>(initialAvatar);
	const [isTranslating, setIsTranslating] = useState<boolean>(false);

	const latestTextToTranslate = useRef(textToTranslate);

	useEffect(() => {
		latestTextToTranslate.current = textToTranslate;
	}, [textToTranslate]);

	// --- Effect for Initial Unity Setup (runs once when loaded) ---
	useEffect(() => {
		if (isLoaded && unityInstance) {
			console.log(
				"LibrasCard: Unity instance loaded. Sending initial configuration.",
			);
			try {
				sendMessage(
					GAME_OBJECTS.CUSTOMIZATION_BRIDGE,
					UNITY_CONSTS.CUSTOMIZATION_METHODS.SET_URL,
					CONFIG_URL,
				);
				sendMessage(
					GAME_OBJECTS.PLAYER_MANAGER,
					UNITY_CONSTS.PLAYER_MANAGER_METHODS.SET_BASE_URL,
					DICTIONARY_URL,
				);
				sendMessage(
					GAME_OBJECTS.PLAYER_MANAGER,
					UNITY_CONSTS.PLAYER_MANAGER_METHODS.CHANGE_AVATAR,
					currentAvatar,
				);
				sendMessage(
					GAME_OBJECTS.PLAYER_MANAGER,
					UNITY_CONSTS.PLAYER_MANAGER_METHODS.SET_SUBTITLES_STATE,
					Number(isShowSubtitle),
				);
				sendMessage(
					GAME_OBJECTS.PLAYER_MANAGER,
					UNITY_CONSTS.PLAYER_MANAGER_METHODS.INIT_RANDOM_ANIMATIONS,
				);

				if (latestTextToTranslate.current?.trim()) {
					console.log(
						"LibrasCard: Triggering initial translation after Unity load.",
					);
					handleTranslate();
				}
			} catch (e) {
				console.error(
					"LibrasCard: Error sending initial configuration to Unity:",
					e,
				);
			}
		}
	}, [isLoaded, unityInstance, sendMessage, currentAvatar, isShowSubtitle]);

	// Effect for Handling Events FROM Unity (State Changes, Gloss Counter)
	useEffect(() => {
		// Handler for Unity's playback state updates
		const handlePlayingStateChange = (
			payload: PlayingStatePayload | string,
		) => {
			console.log(
				`LibrasCard: Event 'onPlayingStateChange' received in state ${playerState}:`,
				payload,
			);
			let _isPlaying = false;
			let _isPaused = false;

			try {
				// Safely parse the payload
				if (typeof payload === "string" && payload.includes(",")) {
					const parts = payload.split(",");
					_isPlaying = toBoolean(parts[0]);
					_isPaused = toBoolean(parts[1]);
				} else if (typeof payload === "object" && payload !== null) {
					_isPlaying = toBoolean(payload.isPlaying);
					_isPaused = toBoolean(payload.isPaused);
				} else {
					// Handle unexpected format
					console.warn(
						"LibrasCard: Unexpected payload format for onPlayingStateChange:",
						payload,
					);
					return;
				}
			} catch (parseError) {
				console.error(
					"LibrasCard: Error parsing onPlayingStateChange payload:",
					parseError,
					payload,
				);
				return; // Don't proceed with bad data
			}

			// Determine next state based on parsed data and current state
			if (_isPlaying) {
				if (playerState !== "PLAYING") {
					console.log("LibrasCard: State transition to PLAYING.");
					setPlayerState("PLAYING");
				}
			} else if (_isPaused) {
				if (playerState !== "PAUSED") {
					console.log("LibrasCard: State transition to PAUSED.");
					setPlayerState("PAUSED");
				}
			} else {
				// Not playing and not paused -> means stopped or finished
				// Only transition back to READY if we were actively playing/paused or just finished translating/replaying
				if (playerState === "PLAYING" || playerState === "PAUSED") {
					console.log("LibrasCard: Playback finished/stopped. State: READY.");
					setPlayerState("READY");
				} else if (playerState === "TRANSLATING") {
					// This case means we sent PLAY_NOW after translation, but Unity immediately reported stopped state.
					// Playback likely failed silently or was instantly interrupted.
					console.warn(
						"LibrasCard: Received stopped state immediately after TRANSLATING. Playback likely failed. State: READY.",
					);
					setPlayerState("READY");
				}
				// If already READY, ignore redundant stop signals.
			}
		};

		// Handler for gloss counter (optional)
		const handleCounterGloss = (counter: number, glossLength: number): void => {
			// console.log(`LibrasCard: Translation progress: ${counter}/${glossLength}`);
		};

		// --- Global Workaround & Listener Registration ---
		window.onPlayingStateChange = handlePlayingStateChange;
		window.CounterGloss = handleCounterGloss;
		addEventListener(
			UNITY_CONSTS.UNITY_EVENTS.ON_STATE_CHANGE,
			handlePlayingStateChange,
		);
		addEventListener(
			UNITY_CONSTS.UNITY_EVENTS.ON_COUNTER_GLOSS,
			handleCounterGloss,
		);
		// -----------------------------------------------

		// Cleanup function when component unmounts or effect re-runs
		return () => {
			// --- Global Workaround Cleanup ---
			delete window.onPlayingStateChange;
			delete window.CounterGloss;
			// ------------------------------
			removeEventListener(
				UNITY_CONSTS.UNITY_EVENTS.ON_STATE_CHANGE,
				handlePlayingStateChange,
			);
			removeEventListener(
				UNITY_CONSTS.UNITY_EVENTS.ON_COUNTER_GLOSS,
				handleCounterGloss,
			);
			console.log(
				"LibrasCard: Unity event listeners and global handlers removed.",
			);
		};
		// Effect depends on the listener functions and the current playerState (as handler logic uses it)
	}, [addEventListener, removeEventListener, playerState]); // playerState is crucial

	// --- Effect to Trigger Translation when Text Changes ---
	useEffect(() => {
		if (isLoaded && textToTranslate.trim() && unityInstance) {
			console.log(
				"LibrasCard: textToTranslate prop changed, triggering translation.",
			);
			handleTranslate();
		} else if (!isLoaded && textToTranslate.trim()) {
			console.log(
				"LibrasCard: textToTranslate provided, but Unity not loaded yet. Will translate on load.",
			);
		}
	}, [textToTranslate, isLoaded, unityInstance]);

	// --- Action Handlers ---
	const handleTranslate = useCallback(async (): Promise<void> => {
		const text = latestTextToTranslate.current;
		if (!text.trim() || !isLoaded || !unityInstance) {
			console.warn(
				"LibrasCard: Cannot translate - invalid text or Unity not ready.",
			);
			return;
		}
		console.log("LibrasCard: Starting translation process for:", text);
		setIsTranslating(true);
		setHasFinished(false);
		setIsPlaying(false);
		setIsPaused(false);
		try {
			sendMessage(
				GAME_OBJECTS.PLAYER_MANAGER,
				UNITY_CONSTS.PLAYER_MANAGER_METHODS.STOP_ALL,
			);
			const translatedLibras = await vlibrasService.translateText(text);
			if (!translatedLibras) {
				console.warn(
					"LibrasCard: Received empty translation gloss. Aborting playback.",
				);
				setIsTranslating(false);
				setHasFinished(true);
				return;
			}
			console.log(
				"LibrasCard: Translation received, sending PLAY_NOW to Unity.",
			);
			sendMessage(
				GAME_OBJECTS.PLAYER_MANAGER,
				UNITY_CONSTS.PLAYER_MANAGER_METHODS.PLAY_NOW,
				translatedLibras,
			);
		} catch (error) {
			console.error("LibrasCard: Error during translation or playback:", error);
			setHasFinished(true);
		} finally {
			setIsTranslating(false);
		}
	}, [isLoaded, unityInstance, sendMessage]);

	// --- Render Logic ---
	return (
		<div
			className={`inline-flex flex-col rounded-lg bg-white shadow-lg ${className} relative mt-2 overflow-hidden`} // Added overflow-hidden
		>
			{/* Loading / Error State Overlay */}
			{!isLoaded && (
				<div className="absolute inset-0 z-20 flex flex-col items-center justify-center rounded-lg bg-gray-100 bg-opacity-80">
					<Loader className="animate-spin text-indigo-600" size={48} />
					<p className="mt-2 font-semibold text-gray-700">
						Carregando Player... {Math.round(loadingProgression * 100)}%
					</p>
					{error && (
						<p className="mt-1 text-center text-red-600 text-xs">{error}</p>
					)}
				</div>
			)}
			{isLoaded && error && (
				<div className="absolute inset-0 z-20 flex flex-col items-center justify-center rounded-lg bg-red-100 bg-opacity-90 p-4">
					<p className="font-semibold text-red-700">Erro no Player</p>
					<p className="mt-1 text-center text-red-600 text-xs">{error}</p>
				</div>
			)}

			{/* Main Content Area */}
			<div
				className={`flex flex-1 flex-col items-center justify-center text-black ${!isLoaded ? "pointer-events-none opacity-50" : ""}`}
			>
				{/* Avatar Controls */}
				<div className="absolute top-2 right-2 z-10">
					<AvatarControls
						currentAvatar={currentAvatar}
						isShowSubtitle={isShowSubtitle}
						sendMessage={sendMessage}
					/>
				</div>

				{/* Unity Player Container DIV */}
				<div className="inline-flex aspect-[3/4] h-[300px] w-full items-center justify-center bg-white">
					{/* This div is the target for UnityLoader.instantiate */}
					{/* It MUST have the id generated by the hook */}
					<div
						id={htmlElementId} // CRITICAL: Assign the ID from the hook
						style={{ width: "100%", height: "100%", position: "relative" }} // Ensure it takes space
					>
						{/* Unity Canvas will be mounted inside here by UnityLoader */}
						{/* Optional: Placeholder while Unity mounts if needed, though overlay handles loading */}
						{/* {!isLoaded && <p>Initializing Canvas...</p>} */}
					</div>
				</div>

				{/* Spacer */}
				<div className="h-1" />

				{/* Playback Controls */}
				<div className="absolute right-0 bottom-2 left-0 flex justify-center">
					<div className="flex gap-2">
						<PlayerControls
							isPlaying={isPlaying}
							isPaused={isPaused}
							hasFinished={hasFinished}
							isTranslating={isTranslating}
							onTranslate={handleTranslate}
							sendMessage={sendMessage}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
