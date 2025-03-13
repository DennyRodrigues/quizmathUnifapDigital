"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "./magicui/grid-pattern";

export function GridPatternDashed() {
	return (
		<div className="-z-100 custom-bg absolute inset-0 flex size-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20">
			<GridPattern
				width={30}
				height={30}
				x={-1}
				y={-1}
				strokeDasharray={"4 2"}
				color="#fff"
				stroke="#fff"
				className={cn(
					"[mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]",
				)}
			/>
		</div>
	);
}
