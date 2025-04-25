"use client";

import { useEffect, useMemo, useId } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence, animate } from "framer-motion";

export type ProgressStep = {
	percentage: number;
	color: string;
};

export interface ArcProgressBarProps {
	steps: ProgressStep[];
	currentStep?: number;
	width?: number;
	height?: number;
	strokeWidth?: number;
	showPercentage?: boolean;
	showGlow?: boolean;
	glowIntensity?: number;
	animationDuration?: number;
	idleColor?: string;
	onAnimationComplete?: () => void;
}

export function ArcProgressBar({
	steps = [],
	currentStep = 0,
	width = 200,
	height = 120,
	strokeWidth = 12,
	showPercentage = true,
	showGlow = true,
	glowIntensity = 3,
	animationDuration = 1,
	idleColor = "#e5e7eb",
	onAnimationComplete,
}: ArcProgressBarProps) {
	// Generate stable ID for the filter
	const filterId = useId();
	
	// Calculate target percentage
	const targetStep = useMemo(() => {
		if (steps.length === 0) return { percentage: 0, color: "#4973ff" };
		const sortedSteps = [...steps].sort((a, b) => a.percentage - b.percentage);
		return sortedSteps[Math.min(currentStep, sortedSteps.length - 1)] || sortedSteps[0];
	}, [steps, currentStep]);

	// Calculate arc geometry
	const arcGeometry = useMemo(() => {
		const centerX = width / 2;
		const centerY = height;
		const radius = Math.min(width / 2, height) - strokeWidth / 2;

		// Create an arc path (half circle)
		const arcPath = `
      M ${centerX - radius} ${centerY}
      A ${radius} ${radius} 0 0 1 ${centerX + radius} ${centerY}
    `;

		return {
			centerX,
			centerY,
			radius,
			arcPath,
		};
	}, [width, height, strokeWidth]);

	// Animation values
	const count = useMotionValue(0);
	const roundedCount = useTransform(count, Math.round);
	const displayCount = useTransform(roundedCount, value => `${value}%`);

	// Start the counter animation when targetStep changes
	useEffect(() => {
		const animation = animate(count, targetStep.percentage, {
			duration: animationDuration,
			ease: "easeOut",
		});

		return animation.stop;
	}, [count, targetStep.percentage, animationDuration]);

	// Calculate step markers
	const stepMarkers = useMemo(() => {
		if (!steps.length) return [];

		return steps.map((step, index) => {
			const { centerX, centerY, radius } = arcGeometry;
			const angle = (step.percentage / 100) * Math.PI;

			return {
				key: `marker-${index}`,
				cx: centerX + radius * Math.cos(Math.PI - angle),
				cy: centerY - radius * Math.sin(angle),
				r: strokeWidth / 2,
				color: step.color,
				percentage: step.percentage,
			};
		});
	}, [steps, arcGeometry, strokeWidth]);

	return (
		<div className="relative" style={{ width, height }}>
			<motion.svg
				width={width}
				height={height}
				viewBox={`0 0 ${width} ${height}`}
				className="overflow-visible"
				initial="hidden"
				animate="visible"
			>
				{showGlow && (
					<defs>
						<filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
							<feGaussianBlur stdDeviation={glowIntensity} result="blur" />
							<feFlood
								floodColor={targetStep.color}
								floodOpacity="0.5"
								result="color"
							/>
							<feComposite in="color" in2="blur" operator="in" result="glow" />
							<feMerge>
								<feMergeNode in="glow" />
								<feMergeNode in="SourceGraphic" />
							</feMerge>
						</filter>
					</defs>
				)}

				{/* Background arc */}
				<path
					d={arcGeometry.arcPath}
					fill="none"
					stroke={idleColor}
					strokeWidth={strokeWidth}
					strokeLinecap="round"
				/>

				{/* Foreground animated arc */}
				<motion.path
					d={arcGeometry.arcPath}
					fill="none"
					stroke={targetStep.color}
					strokeWidth={strokeWidth}
					strokeLinecap="round"
					strokeDasharray="1"
					strokeDashoffset="1"
					initial={{ pathLength: 0 }}
					animate={{ 
						pathLength: targetStep.percentage / 100,
						transition: { 
							duration: animationDuration,
							ease: "easeOut"
						}
					}}
					onAnimationComplete={onAnimationComplete}
					filter={showGlow ? `url(#${filterId})` : undefined}
				/>

				{/* Step markers */}
				<AnimatePresence>
					{stepMarkers.map(({ key, cx, cy, r, color, percentage }, index) => (
						<motion.circle
							key={key}
							cx={cx}
							cy={cy}
							r={r}
							fill={roundedCount.get() >= percentage ? color : "#fff"}
							stroke={color}
							strokeWidth={2}
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{
								delay: 0.1 * index,
								duration: 0.4,
								ease: "backOut",
							}}
						/>
					))}
				</AnimatePresence>

				{/* Percentage text */}
				{showPercentage && (
					<>
						<motion.text
							x={arcGeometry.centerX}
							y={arcGeometry.centerY - arcGeometry.radius / 2}
							textAnchor="middle"
							dominantBaseline="middle"
							className="font-bold text-3xl"
							fill={targetStep.color}
							initial={{ opacity: 0, y: 10 }}
							animate={{ 
								opacity: 1, 
								y: 0,
								transition: { delay: 0.2, duration: 0.5 }
							}}
						>
							{displayCount}
						</motion.text>

						<motion.text
							x={arcGeometry.centerX}
							y={arcGeometry.centerY - arcGeometry.radius / 2 + 30}
							textAnchor="middle"
							dominantBaseline="middle"
							className="text-lg"
							fill={targetStep.color}
							initial={{ opacity: 0, y: 10 }}
							animate={{ 
								opacity: 1, 
								y: 0,
								transition: { delay: 0.3, duration: 0.5 }
							}}
						>
							Acertos
						</motion.text>
					</>
				)}
			</motion.svg>
		</div>
	);
}
