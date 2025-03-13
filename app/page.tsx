import { GridPatternDashed } from "@/components/dashed-grid-pattern";
import { DifficultyCard } from "@/components/dificult-card";
import { LevelSelection } from "@/components/level-selection";
import { PlayButton } from "@/components/play-button";

export default function Intro() {
	return (
		<>
			<div className="grid min-h-screen justify-items-center pt-20 pb-10">
				<main className="grid gap-2 [grid-template-rows:auto_1fr]">
					<div>
						<h1 className="select-none text-center font-bungee text-4xl tracking-wide [text-shadow:3px_3px_0_rgba(0,0,0,0.05),_6px_6px_0_rgba(0,0,0,0.02)]">
							<span className="text-[#34D399]">Q</span>
							<span className="text-[#60A5FA]">U</span>
							<span className="text-[#F87171]">I</span>
							<span className="text-[#FBBF24]">Z</span>
							<span className="inline-flex rotate-5 text-white transition-all [text-shadow:none] hover:rotate-0">
								🧮
							</span>
							<span className="text-[#F472B6]">M</span>
							<span className="text-[#60A5FA]">A</span>
							<span className="text-[#34D399]">T</span>
							<span className="text-[#FBBF24]">H</span>
						</h1>
						<p className="text-slate-800">
							Pratique seus conhecimentos de matemática!
						</p>
					</div>
					{/* <div className="flex flex-col gap-6 place-self-center">
					<h2 className="text-center">Selecione a dificuldade</h2>
					<LevelSelection />
					<PlayButton text="JOGAR" />
				</div> */}
					<div className="flex flex-col gap-6 place-self-center">
						<DifficultyCard />
						<PlayButton text="JOGAR" />
					</div>
				</main>
			</div>
			<GridPatternDashed />
		</>
	);
}
