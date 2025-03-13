"use client";

import { Level } from "@/types/quiz";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function LevelButton({
	level,
	isSelected,
	setSelected,
}: {
	level: Level;
	isSelected: boolean;
	setSelected: (n: number) => void;
}) {
	return (
		<motion.li
			className="relative mx-1 first:ml-0 last:mr-0"
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3, delay: level.id * 0.1 }}
		>
			<motion.button
				type="button"
				className="relative overflow-hidden rounded-md px-4 py-2 font-bold text-md"
				initial={false}
				animate={{
					scale: isSelected ? 1.05 : 1,
					y: isSelected ? -2 : 0,
				}}
				whileHover={{ scale: isSelected ? 1.05 : 1.03 }}
				whileTap={{ scale: 0.95 }}
				transition={{
					type: "spring",
					stiffness: 400,
					damping: 17,
				}}
				style={{ backgroundColor: isSelected ? level.backgroundColor : "#eee" }}
				onClick={() => setSelected(level.id)}
			>
				<motion.span
					className="relative z-10 block"
					animate={{
						color: isSelected ? "white" : "#333",
					}}
					transition={{ duration: 0.2 }}
				>
					{level.text}
				</motion.span>

				{isSelected && (
					<motion.div
						className="absolute right-0 bottom-0 left-0 z-20 h-1"
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						style={{
							backgroundColor: level.backgroundColor,
							filter: "brightness(70%)",
						}}
					/>
				)}
			</motion.button>
		</motion.li>
	);
}
