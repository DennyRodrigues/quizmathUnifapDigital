"use client";
import {
	Popover,
	PopoverArrow,
	PopoverContent,
	PopoverTrigger,
} from "@radix-ui/react-popover";
import { CircleHelp } from "lucide-react";
import { levels } from "./level-selection";

export function InfoPopover() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<button
					type="button"
					className="size-8 rounded-full p-1 text-blue-400 hover:bg-gray-100 hover:text-blue-600"
				>
					<CircleHelp />
				</button>
			</PopoverTrigger>
			<PopoverContent className="z-100 w-80 bg-white/95 p-4">
				<PopoverArrow />
				<div className="space-y-4">
					<h3 className="font-bold">Informações de Dificuldade</h3>
					<ul className="space-y-2">
						{levels.map((level) => (
							<li key={level.id} className="flex items-center justify-between">
								<div className="flex items-center gap-2">
									<div
										className="h-3 w-3 rounded-full"
										style={{ backgroundColor: level.backgroundColor }}
									/>
									<span>{level.text}</span>
								</div>
								<div className="flex gap-4">
									<span>{level.questions} questões</span>
									<span className="font-bold">{level.multiplier}x pontos</span>
								</div>
							</li>
						))}
					</ul>
				</div>
			</PopoverContent>
		</Popover>
	);
}
