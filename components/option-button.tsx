"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface OptionButtonProps {

	optionText: string;
	index: number;

	answered: boolean;
	selected?: boolean;
	isCorrectAnswer?: boolean;
	onClick?: (index: number) => void;
	theme?: {
		buttonGradient?: string;
		buttonShadow?: string;
	};
	selectMode: boolean;
	withoutFeedback?: boolean;
}

export function OptionButton({

	optionText,
	index,

	answered = false,
	selected = false,
	isCorrectAnswer = false,
	onClick = () => { },
	theme = {},
	withoutFeedback = false,
	selectMode,
}: OptionButtonProps) {
	const [isHovered, setIsHovered] = useState(false);
	const [isPressed, setIsPressed] = useState(false);

	const getButtonStyles = () => {
		let buttonGradient = "linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)";
		let buttonBaseColor = "#d0d0d0";
		let textColor = "#333333";
		let borderColor = "rgba(255, 255, 255, 0.5)";
		let shadowColor = "rgba(0, 0, 0, 0.1)";

		if (selected && answered) {
			if (withoutFeedback) {
				buttonGradient = "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)";
				buttonBaseColor = "#2563eb";
				textColor = "white";
				borderColor = "rgba(255, 255, 255, 0.6)";
				shadowColor = "rgba(0, 0, 0, 0.25)";
			} else if (isCorrectAnswer) {
				buttonGradient = "linear-gradient(135deg, #4ADE80 0%, #22C55E 100%)";
				buttonBaseColor = "#16A34A";
				textColor = "white";
				borderColor = "rgba(255, 255, 255, 0.6)";
				shadowColor = "rgba(0, 0, 0, 0.25)";
			} else {
				buttonGradient = "linear-gradient(135deg, #F87171 0%, #EF4444 100%)";
				buttonBaseColor = "#DC2626";
				textColor = "white";
				borderColor = "rgba(255, 255, 255, 0.6)";
				shadowColor = "rgba(0, 0, 0, 0.25)";
			}
		} else if (selected) {
			buttonGradient =
				theme.buttonGradient ||
				"linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)";
			buttonBaseColor = theme.buttonShadow || "#2563eb";
			textColor = "white";
			borderColor = "rgba(255, 255, 255, 0.6)";
			shadowColor = "rgba(0, 0, 0, 0.25)";
		}

		return {
			buttonGradient,
			buttonBaseColor,
			textColor,
			borderColor,
			shadowColor,
		};
	};

	const styles = getButtonStyles();

	const letters = ["A", "B", "C", "D"];
	const badgeColors = [
		{ bg: "#5b9bd5", shadow: "#3a7ab5" },
		{ bg: "#9d7ad9", shadow: "#7d5ab9" },
		{ bg: "#e57373", shadow: "#c55353" },
		{ bg: "#f0ad4e", shadow: "#d08d2e" },
	];

	return (
		<motion.div
			className="w-full"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.1 + 0.3 }}
		>
			<button
				className={`relative w-full text-left outline-none outline-1 outline-black ${answered ? "pointer-events-none" : ""}`}

				onClick={() => onClick(index)}

				onMouseEnter={() => !answered && setIsHovered(true)}
				onMouseLeave={() => !answered && setIsHovered(false)}
				onMouseDown={() => !answered && setIsPressed(true)}
				onMouseUp={() => !answered && setIsPressed(false)}
				disabled={answered}
				aria-pressed={selected}
			>
				<div
					className="absolute inset-0 rounded-xl transition-all duration-300"
					style={{
						background: styles.buttonBaseColor,
						filter: "blur(0.5px)",
						transform: isPressed ? "translateY(1px)" : "translateY(4px)",
					}}
				/>

				<div
					className={`relative w-full rounded-xl p-3 transition-all duration-300 sm:p-4 ${isHovered && !answered ? "scale-[1.02]" : "scale-100"
						} ${isPressed ? "translate-y-1" : "translate-y-0"}`}
					style={{
						background: styles.buttonGradient,
						boxShadow: `
              0 ${isPressed ? "2px" : "4px"} 0 ${styles.buttonBaseColor},
              0 ${isPressed ? "2px" : "4px"} 6px ${styles.shadowColor},
              inset 0 1px 0 rgba(255, 255, 255, 0.3)
            `,
						border: `2px solid ${styles.borderColor}`,
					}}
				>
					<div className="flex h-full items-center ">
						<div
							className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full font-bold text-base text-white sm:mr-4 sm:h-10 sm:w-10 sm:text-lg md:h-12 md:w-12 md:text-xl"
							style={{
								background: selected
									? "rgba(255,255,255,0.3)"
									: `linear-gradient(135deg, ${badgeColors[index % 4].bg} 0%, ${badgeColors[index % 4].shadow} 100%)`,
								boxShadow: selected
									? "inset 0 2px 4px rgba(0,0,0,0.1)"
									: `0 2px 0 ${badgeColors[index % 4].shadow}, 0 3px 5px rgba(0,0,0,0.2)`,
								border: "1px solid rgba(255,255,255,0.4)",
							}}
						>
							{letters[index % 4]}
						</div>

						{ }
						<div
							className={`flex-1 font-bold text-sm sm:text-base md:text-xl lg:text-2xl ${selectMode && "hover:underline"}`}
							style={{ color: styles.textColor }}
						>
							{optionText}
						</div>
						{ }

						{renderFeedbackIcon()}
					</div>
				</div>
			</button>
		</motion.div>
	);

	function renderFeedbackIcon() {

		if (!answered) return null;

		if (withoutFeedback && selected) {
			return (
				<div className="ml-2 flex-shrink-0">
					<CheckIcon />
				</div>
			);
		}

		if (!withoutFeedback) {
			if (selected && isCorrectAnswer) {
				return (
					<div className="ml-2 flex-shrink-0">
						<CheckIcon />
					</div>
				);
			} else if (selected && !isCorrectAnswer) {
				return (
					<div className="ml-2 flex-shrink-0">
						<CrossIcon />
					</div>
				);
			} else if (isCorrectAnswer) {
				return (
					<div className="ml-2 flex-shrink-0">
						<CheckIcon className="opacity-70" />
					</div>
				);
			}
		}

		return null;
	}
}

function CheckIcon({ className = "" }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={`h-5 w-5 text-white sm:h-6 sm:w-6 md:h-8 md:w-8 ${className}`}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M5 13l4 4L19 7"
			/>
		</svg>
	);
}

function CrossIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="h-5 w-5 text-white sm:h-6 sm:w-6 md:h-8 md:w-8"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M6 18L18 6M6 6l12 12"
			/>
		</svg>
	);
}
