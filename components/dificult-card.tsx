"use client";

import { motion } from "motion/react";
import { InfoPopover } from "./InfoPopover";
import { LevelSelection } from "./level-selection";

export function DifficultyCard() {
	return (
		<motion.div
			className=""
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="mb-4 flex items-center justify-between">
				<h2 className="font-bold text-gray-800 text-xl">
					Selecione a dificuldade
				</h2>
				<InfoPopover />
			</div>
			<LevelSelection />
		</motion.div>
	);
}
