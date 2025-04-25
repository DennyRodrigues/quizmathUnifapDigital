"use client"

import { cn } from "@/lib/utils"
import { GridPattern } from "./magicui/grid-pattern"

export function GridPatternDashed() {
	return (
		<div className="-z-10 custom-bg fixed inset-0 min-h-full w-full bg-background">
			<div className="absolute inset-0 h-full w-full">
				<GridPattern
					width={30}
					height={30}
					x={-1}
					y={-1}
					strokeDasharray={"4 2"}
					color="#fff"
					stroke="#fff"
					className={cn("h-full w-full [mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]")}
				/>
			</div>
		</div>
	)
}
