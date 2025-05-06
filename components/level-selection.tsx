"use client";

import { levelAtom } from "@/lib/atom";
import { LEVELS } from "@/types/quiz";
import { useAtom } from "jotai";
import { motion } from "motion/react";
import { LevelButton } from "./level-button";
import { useQuizStore } from "@/lib/zustand";
import { Tooltip } from "./tooltip/tooltip";


export function LevelSelection() {
	const currentDifficulty = useQuizStore((state) => state.selectedDifficulty);
	const globalCoins = useQuizStore((state) => state.globalCoins);
	const setDifficulty = useQuizStore((state) => state.setDifficulty);

	return <motion.ul
		className="flex items-center justify-center space-x-2 p-2"
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ duration: 0.5, staggerChildren: 0.1 }}
	>
		{LEVELS.map((level) => (

			<Tooltip
				key={`${level.id}-tooltip`}
				text={`Requer ${level.requiredCoins} moedas`}
			>
				<LevelButton
					key={level.id}
					level={level}
					isDisabled={level.requiredCoins > globalCoins}
					isSelected={currentDifficulty === level.level}
					setSelected={() => setDifficulty(level.level)}
				/>
			</Tooltip>

		))
		}
	</motion.ul >

}
