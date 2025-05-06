export type Level = "Fácil" | "Médio" | "Difícil";

export const DISPLAY_LEVELS_VALUES = {
	Fácil: "Fácil",
	Médio: "Médio",
	Difícil: "Difícil",
} as const satisfies Record<Level, string>;

export type ExtractValues<T> = T[keyof T];

export type DisplayLevelText = ExtractValues<typeof DISPLAY_LEVELS_VALUES>;

export type LevelInfo = {
	backgroundColor: string;
	level: Level;
	displayText: DisplayLevelText;
	id: number;
	questions: number;
	multiplier: number;
	requiredCoins: number; 
};

export const LEVELS: LevelInfo[] = [
	{
		backgroundColor: "#60A5FA",
		level: "Fácil",
		displayText: "Fácil",
		id: 0,
		questions: 8,
		multiplier: 1,
		requiredCoins: 0,
	},
	{
		backgroundColor: "#FBBF24",
		level: "Médio",
		displayText: "Médio",
		id: 1,
		questions: 10,
		multiplier: 2,
		requiredCoins: 1000,
	},
	{
		backgroundColor: "#F87171",
		level: "Difícil",
		displayText: "Difícil",
		id: 2,
		questions: 12,
		multiplier: 3,
		requiredCoins: 3000,
	},
] as const;
