import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function toBoolean(
	flag: string | number | boolean | undefined | null,
): boolean {
	// Handles Unity's potential "True"/"False" strings, numbers, and booleans
	if (typeof flag === "string") {
		return flag.toLowerCase() === "true";
	}
	return Boolean(flag);
}
