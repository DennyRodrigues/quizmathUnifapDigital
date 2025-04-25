"use client";

import { Button3D, type ColorScheme } from "@/components/ui/button-3d";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { PlayIcon } from "./icons/play-icon";
import { useAtom } from "jotai";
import { levelAtom } from "@/lib/atom";
import { Level } from "@/types/quiz";
import { useQuizStore } from "@/lib/zustand";
import { start } from "repl";
import { useRouter } from "next/navigation";


export const COLOR_SCHEMES: Record<Level, ColorScheme> = {
	Fácil: {
		foreground: "hsl(227, 90%, 61%)",
		dark: "hsl(234, 90%, 50%)",
		darker: "hsl(234, 90%, 25%)",
	},
	Médio: {
		foreground: "hsl(50, 90%, 55%)",
		dark: "hsl(50, 90%, 44%)",
		darker: "hsl(50, 90%, 30%)",
	},
	Difícil: {
		foreground: "hsl(345, 100%, 47%)",
		dark: "hsl(340deg 100% 32%)",
		darker: "hsl(340deg 100% 16%)",
	},
};

export type PlayButtonProps = {
	text: string;
	colorScheme?: ColorScheme;
	fullWidth?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function PlayButton({
	text,
	colorScheme = COLOR_SCHEMES.Fácil,
	...props
}: PlayButtonProps) {
	const startQuiz = useQuizStore((state) => state.startQuiz);
	const selectedDifficulty = useQuizStore((state) => state.selectedDifficulty);
	const router = useRouter()


	const handleStart = () => {
		startQuiz()

		router.push("/play")
	}


	return <Button3D
		colorScheme={COLOR_SCHEMES[selectedDifficulty]}
		icon={<PlayIcon />}
		className="w-full font-extrabold text-lg text-white uppercase"
		onClick={handleStart}
		{...props}

	>
		{text}
	</Button3D>


}
