/**
 * Função esperada
 * GAME_OBJECTS valídos PlayerManger | CustomizationBridge
 * SendMessage(GAME_OBJECT, method, params)
 */

import { ExtractValues } from "@/types/quiz";

export const GAME_OBJECTS = {
	PLAYER_MANAGER: "PlayerManager",
	CUSTOMIZATION_BRIDGE: "CustomizationBridge",
} as const;

export type GAME_OBJECT = ExtractValues<typeof GAME_OBJECTS>;

export const UNITY_CONSTS = {
	PLAYER_MANAGER_METHODS: {
		INIT_RANDOM_ANIMATIONS: "initRandomAnimationsProcess",
		PLAY_NOW: "playNow",
		SET_PAUSE_STATE: "setPauseState",
		STOP_ALL: "stopAll",
		SET_SLIDER: "setSlider",
		SET_SUBTITLES_STATE: "setSubtitlesState",
		PLAY_WELCOME: "playWellcome",
		CHANGE_AVATAR: "Change",
		SET_BASE_URL: "setBaseUrl",
	},

	CUSTOMIZATION_METHODS: {
		SET_URL: "setURL",
	},

	UNITY_EVENTS: {
		ON_LOAD: "onLoadPlayer",
		ON_PROGRESS: "updateProgress",
		ON_STATE_CHANGE: "onPlayingStateChange",
		ON_COUNTER_GLOSS: "CounterGloss",
		ON_FINISH_WELCOME: "FinishWelcome",
	},

	PLAYER_CONTROLS: {
		PLAY: "play",
		PAUSE: "pause",
		STOP: "stop",
		SET_SPEED: "setSpeed",
		TOGGLE_SUBTITLE: "toggleSubtitle",
		SET_PERSONALIZATION: "setPersonalization",
		SET_REGION: "setRegion",
	},

	PLAYER_STATUS: {
		IDLE: "idle",
		PREPARING: "preparing",
		PLAYING: "playing",
	},
	// TODO
	// Feedback animations
	// correct: Parabéns você acertou!
	// wrong: No no
	UTILS: {
		TO_INT: "toInt",
		TO_BOOLEAN: "toBoolean",
	},
} as const;

export type UNITY_METHOD =
	| ExtractValues<(typeof UNITY_CONSTS)["CUSTOMIZATION_METHODS"]>
	| ExtractValues<(typeof UNITY_CONSTS)["PLAYER_MANAGER_METHODS"]>
	| ExtractValues<(typeof UNITY_CONSTS)["PLAYER_CONTROLS"]>;

export const DICTIONARY_URL =
	"https://dicionario2.vlibras.gov.br/2018.3.1/WEBGL/";
export const CONFIG_URL = "";
// export const CONFIG_URL = "https://vlibras.gov.br/config/configs.json";
export const UNITY_BUILD_JSON_PATH = "/build/final.json";
export const UNITY_LOADER_PATH = "/build/UnityLoader.js";
