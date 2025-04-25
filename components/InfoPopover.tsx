"use client";
import { LEVELS } from "@/types/quiz";
import {
	Popover,
	PopoverArrow,
	PopoverContent,
	PopoverTrigger,
} from "@radix-ui/react-popover";
import { CircleHelp } from "lucide-react";

export function InfoPopover() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<button
					type="button"
					className="size-8 cursor-pointer rounded-full p-1 text-blue-400 hover:bg-gray-100 hover:text-blue-600"
				>
					<CircleHelp />
				</button>
			</PopoverTrigger>
			<PopoverContent className="z-100 w-80 rounded-md bg-white/90 p-4 backdrop-blur-md">
				<PopoverArrow color="white" className="bg-white/95" />
				<div className="space-y-4">
					<h3 className="font-bold">Informações de Dificuldade</h3>
					<ul className="space-y-2">
						{LEVELS.map((level) => (
							<li key={level.id} className="flex items-center justify-between">
								<div className="flex items-center gap-2">
									<div
										className="h-3 w-3 rounded-full"
										style={{ backgroundColor: level.backgroundColor }}
									/>
									<span>{level.displayText}</span>
								</div>
								<div className="flex items-center gap-4">
									<span>{level.questions} questões</span>
									<span className="font-bold font-bungee text-xs">
										{level.multiplier}x pontos
									</span>
								</div>
							</li>
						))}
					</ul>
				</div>
			</PopoverContent>
		</Popover>
	);
}
