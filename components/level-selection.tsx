"use client";

import { Level } from "@/types/quiz";
import { motion } from "motion/react";
import { useState } from "react";
import { LevelButton } from "./level-button";

export const levels: Level[] = [
	{
		backgroundColor: "#60A5FA",
		text: "Fácil",
		id: 0,
		questions: 8,
		multiplier: 1,
	},
	{
		backgroundColor: "#34D399",
		text: "Médio",
		id: 1,
		questions: 12,
		multiplier: 2,
	},
	{
		backgroundColor: "#F87171",
		text: "Difícil",
		id: 2,
		questions: 20,
		multiplier: 3,
	},
] as const;

export function LevelSelection() {
	const [selected, setSelected] = useState(0);
	return (
		<motion.ul
			className="flex items-center justify-center space-x-2 p-2"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, staggerChildren: 0.1 }}
		>
			{levels.map((level) => (
				<LevelButton
					key={level.id}
					level={level}
					isSelected={level.id === selected}
					setSelected={setSelected}
				/>
			))}
		</motion.ul>
	);
}
