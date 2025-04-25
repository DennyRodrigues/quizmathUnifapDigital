import React, { JSX } from "react";
import { Play, Pause, RotateCcw, RefreshCw } from "lucide-react";
import "./styles.css";
import { GAME_OBJECTS, UNITY_CONSTS, UNITY_METHOD } from "@/constants/player";

interface PlayerControlsProps {
	isPlaying: boolean;
	isPaused: boolean;
	hasFinished: boolean;
	isTranslating: boolean;
	onTranslate: () => void; // Keep simple, async handled by caller
	sendMessage: (
		gameObject: string,
		method: UNITY_METHOD,
		params?: number | string,
	) => void; // Use specific types
}

export function PlayerControls({
	isPlaying,
	isPaused,
	hasFinished,
	isTranslating,
	onTranslate,
	sendMessage,
}: PlayerControlsProps): JSX.Element {
	const handleRestart = (): void => {
		// Stop playback completely
		sendMessage(
			GAME_OBJECTS.PLAYER_MANAGER,
			UNITY_CONSTS.PLAYER_MANAGER_METHODS.STOP_ALL,
		);
	};

	const handlePauseToggle = (): void => {
		// Send the *new* desired pause state (1 to pause, 0 to resume)
		sendMessage(
			GAME_OBJECTS.PLAYER_MANAGER,
			UNITY_CONSTS.PLAYER_MANAGER_METHODS.SET_PAUSE_STATE,
			Number(!isPaused), // If currently paused (true), send 0 to resume. If playing (false), send 1 to pause.
		);
	};

	// Scenario 1: Currently playing content
	if (isPlaying) {
		return (
			<>
				{/* Stop/Restart Button */}
				<button
					className="player-action-button stop-button" // Consider renaming class if it's more 'stop' than 'restart'
					onClick={handleRestart}
					style={{ backgroundColor: "#DC2626", color: "white" }} // Example: Red for stop
					aria-label="Parar"
					title="Parar"
				>
					<RotateCcw size={20} /> {/* Consider a Stop icon (Square) */}
				</button>
				{/* Pause/Resume Button */}
				<button
					className="player-action-button"
					onClick={handlePauseToggle}
					aria-label={isPaused ? "Continuar" : "Pausar"}
					title={isPaused ? "Continuar" : "Pausar"}
				>
					{isPaused ? <Play size={20} /> : <Pause size={20} />}
				</button>
			</>
		);
	}

	// Scenario 2: Finished playing (not currently playing, but has finished)
	if (hasFinished) {
		return (
			<>
				{/* Replay Button */}
				<button
					className="player-action-button"
					onClick={onTranslate} // Re-triggers the translation/playback
					aria-label="Reproduzir Novamente"
					title="Reproduzir Novamente"
				>
					<RefreshCw size={20} />
				</button>
			</>
		);
	}

	// Scenario 3: Initial state or stopped (not playing, hasn't finished yet)
	return (
		<>
			{/* Play/Translate Button */}
			<button
				className="player-action-button text-white" // Assuming default background is handled by CSS
				onClick={onTranslate}
				disabled={isTranslating}
				aria-label={isTranslating ? "Traduzindo..." : "Reproduzir"}
				title={isTranslating ? "Traduzindo..." : "Reproduzir"}
			>
				{isTranslating ? (
					<RefreshCw size={20} className="animate-spin" />
				) : (
					<Play size={20} />
				)}
			</button>
			{/* Pause Button (Initially visible) */}
			<button
				className="player-action-button player-button-stop"
				onClick={handlePauseToggle}
				aria-label="Pausar"
				title="Pausar"
				disabled={isTranslating}
			>
				<Pause size={20} />
			</button>
		</>
	);
}
