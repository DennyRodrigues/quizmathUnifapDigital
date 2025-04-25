"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ColorScheme = {
	foreground: string;
	dark: string;
	darker: string;
};

export type Button3DProps = {
	children: ReactNode;
	colorScheme?: ColorScheme;
	icon?: ReactNode;
	size?: "sm" | "md" | "lg";
	variant?: "default" | "outline" | "ghost";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button3D({
	children,
	colorScheme,
	icon,
	className,
	size = "md",
	variant = "default",
	...props
}: Button3DProps) {
	const colors = colorScheme || {
		foreground: "hsl(227, 90%, 61%)",
		dark: "hsl(234, 90%, 50%)",
		darker: "hsl(234, 90%, 25%)",
	};

	// Size classes for text only - padding is now handled separately
	const sizeClasses = {
		sm: "text-sm",
		md: "text-base",
		lg: "text-lg group-[.large-ui]:text-xl",
	};

	// Default padding classes - these can be overridden by className
	const defaultPadding = {
		sm: "px-3 py-1.5",
		md: "px-6 py-3",
		lg: "px-8 py-4",
	};

	return (
		<button
			className={cn(
				// Base styles
				"relative cursor-pointer border-none bg-transparent p-0 outline-offset-4 transition-[filter] duration-250",
				// Hover and active states
				"hover:brightness-110 focus:outline-none",
				// Group context
				"group",
				// Custom class extension point
				className,
			)}
			{...props}
		>
			{/* Shadow element */}
			<span
				className="absolute inset-0 h-full w-full translate-y-0.5 rounded-xl bg-black/25 transition-transform duration-600 ease-[cubic-bezier(0.3,0.7,0.4,1)] will-change-transform group-hover:translate-y-1 group-hover:duration-250 group-hover:ease-[cubic-bezier(0.3,0.7,0.4,1.5)] group-active:translate-y-0.25 group-active:duration-[34ms]"
				aria-hidden="true"
			/>

			{/* Edge element */}
			<span
				className="absolute inset-0 h-full w-full rounded-xl"
				style={{
					background: `linear-gradient(
            to left,
            ${colors.darker} 0%,
            ${colors.dark} 8%,
            ${colors.dark} 92%,
            ${colors.darker} 100%
          )`,
				}}
				aria-hidden="true"
			/>

			{/* Front element */}
			<span
				className={cn(
					// Base styles
					"-translate-y-1 relative flex items-center justify-center gap-2 rounded-xl font-bold text-shadow-sm transition-transform duration-600 ease-[cubic-bezier(0.3,0.7,0.4,1)] will-change-transform",
					// Hover and active states
					"group-hover:-translate-y-1.5 group-hover:duration-250 group-hover:ease-[cubic-bezier(0.3,0.7,0.4,1.5)]",
					"group-active:-translate-y-0.5 group-active:duration-[34ms]",
					// Size variants - text size only
					sizeClasses[size],
					// Default padding that can be overridden
					defaultPadding[size],
					// Variant styles
					variant === "outline" && "border-2 border-white/20",
					variant === "ghost" && "bg-opacity-90",
					// Allow for full width and height
					"h-full w-full",
				)}
				style={{
					background: colors.foreground,
				}}
			>
				{icon && (
					<motion.div
						whileHover={{
							scale: [1, 1.1, 1],
							rotate: [0, -3, 3, 0],
						}}
						transition={{
							duration: 0.6,
							ease: "easeInOut",
							times: [0, 0.3, 0.7, 1],
							repeat: Number.POSITIVE_INFINITY,
							repeatDelay: 0.5,
						}}
						className="inline-flex items-center justify-center"
					>
						{icon}
					</motion.div>
				)}
				{children}
			</span>
		</button>
	);
}
