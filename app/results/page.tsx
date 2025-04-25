"use client";

import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import { Button3D, ColorScheme } from "@/components/ui/button-3d";
import {
	BadgeIcon,
	CheckCircle,
	HomeIcon,
	RecycleIcon,
	XCircle,
	CoinsIcon
} from "lucide-react";
import { ArcProgressBar } from "@/components/arc-progress.bar";
import { StarRating } from "@/components/star-rating";
import { GridPatternDashed } from "@/components/dashed-grid-pattern";

import { useQuizStore } from '@/lib/zustand';

import { LevelInfo, LEVELS } from '@/types/quiz';

export default function ResultsScreen() {
	const router = useRouter();

	const quizState = useQuizStore((state) => state.quizState);
	const selectedDifficulty = useQuizStore((state) => state.selectedDifficulty);
	const sessionCoins = useQuizStore((state) => state.sessionCoins);
	const globalCoins = useQuizStore((state) => state.globalCoins);
	const quizQuestions = useQuizStore((state) => state.quizQuestions);
	const userAnswers = useQuizStore((state) => state.userAnswers);
	const resetQuiz = useQuizStore((state) => state.resetQuiz);

	useEffect(() => {

		if (quizState !== 'finished') {
			console.log("Redirecting from Results page, state:", quizState);
			router.replace('/');
		}
	}, [quizState, router]);

	const calculatedResults = useMemo(() => {
		if (quizState !== 'finished') {
			return null;
		}
		const totalQuestions = quizQuestions.length;
		let correctAnswers = 0;
		quizQuestions.forEach((q, index) => {
			if (userAnswers[index] === q.respostaCorreta) {
				correctAnswers++;
			}
		});
		const percentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

		return {
			correctAnswers,
			totalQuestions,
			percentage
		};
	}, [quizState, quizQuestions, userAnswers]);

	const handlePlayAgain = () => {
		resetQuiz();
		router.push('/');
	};

	const handleGoHome = () => {
		resetQuiz();
		router.push('/');
	};

	if (quizState !== 'finished' || !calculatedResults || !selectedDifficulty) {
		return (
			<div className="flex min-h-screen items-center justify-center">
				Loading Results...
			</div>
		);
	}

	const levelInfo = LEVELS.find(level => level.level === selectedDifficulty);
	if (!levelInfo) {
		console.warn("LevelInfo not found for difficulty:", selectedDifficulty);

	}

	return (
		<>
			<section className="relative mx-auto grid min-h-screen max-w-2xl items-center p-6">
				<div className="z-10 grid w-full items-center px-4 sm:px-10">
					<div className="mb-4 flex items-center justify-center">
						<h1 className="select-none text-center font-bungee text-3xl sm:text-4xl text-[#4F46E5] tracking-wide [text-shadow:3px_3px_0_rgba(0,0,0,0.05),_6px_6px_0_rgba(0,0,0,0.02)]">
							Quiz Finalizado!
						</h1>
					</div>

					{ }
					<ScoreCard
						percentage={calculatedResults.percentage}
						correctAnswers={calculatedResults.correctAnswers}
						totalQuestions={calculatedResults.totalQuestions}
						sessionPoints={sessionCoins}
						globalPoints={globalCoins}
						levelInfo={levelInfo}
					/>

					<div className="mt-6">
						<ActionButtons onPlayAgain={handlePlayAgain} onGoHome={handleGoHome} />
					</div>
				</div>
				<GridPatternDashed />
			</section>
		</>
	);
}

interface ScoreCardProps {
	percentage: number;
	correctAnswers: number;
	totalQuestions: number;
	sessionPoints: number;
	globalPoints: number;
	levelInfo: LevelInfo | undefined;
}

function ScoreCard({
	percentage,
	correctAnswers,
	totalQuestions,
	sessionPoints,
	globalPoints,
	levelInfo
}: ScoreCardProps) {

	const incorrectAnswers = totalQuestions - correctAnswers;

	const badgeText = levelInfo?.level ?? 'Nível';
	const badgeStyle = levelInfo?.backgroundColor ? `${levelInfo.backgroundColor} ${levelInfo.backgroundColor || 'bg-opacity-10'} p-1 rounded` : 'text-gray-700 bg-gray-100 p-1 rounded';

	return (
		<div className="rounded-xl border border-gray-100 bg-white p-4 shadow-lg">
			<div className="grid place-items-center pb-4">
				<ArcProgressBar
					steps={[{ percentage: percentage, color: "#4F46E5" }]}
					showPercentage={true}
					animationDuration={1.2}
					width={220}
					height={120}
				/>

				<div className="mt-3 flex justify-center">
					<StarRating rating={Math.round(percentage / 20)} />
				</div>

				<div className="mt-4 flex items-center gap-2">
					<CheckCircle className="h-5 w-5 text-green-500" />
					<span className="font-semibold text-gray-900">
						{correctAnswers} resposta{correctAnswers !== 1 ? 's' : ''} correta{correctAnswers !== 1 ? 's' : ''}
					</span>
				</div>
				<div className="mb-3 flex items-center gap-2">
					<XCircle className="h-5 w-5 text-red-500" />
					<span className="font-semibold text-gray-900">
						{incorrectAnswers} resposta{incorrectAnswers !== 1 ? "s" : ""}{" "}
						incorreta{incorrectAnswers !== 1 ? "s" : ""}
					</span>
				</div>

				<PointsCard points={sessionPoints} />

				<div className="mt-6 w-full">
					<div className="flex flex-col items-center justify-center gap-3">
						<motion.div
							className={`flex items-center gap-2 rounded-md px-3 py-1 text-sm font-bold ${badgeStyle}`}
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.5, duration: 0.5 }}
						>
							<BadgeIcon className="h-5 w-5" />
							<span>{badgeText}</span>
						</motion.div>

						<motion.div
							className="flex flex-col items-center rounded-xl border-2 border-amber-400/30 bg-gradient-to-br from-amber-50 to-amber-100 p-4 shadow-[0_0_15px_rgba(251,191,36,0.2)]"
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.7, duration: 0.5 }}
						>
							<div className="flex items-center gap-5">
								<CoinsIcon className="size-12 text-amber-600" />
								<div className="text-center">
									<p className="text-amber-700 text-sm">Total acumulado</p>
									<p className="font-bungee text-2xl text-amber-600">
										{globalPoints} pontos
									</p>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}

function PointsCard({ points }: { points: number }) {
	return (
		<motion.div
			className="flex w-auto items-center justify-center gap-3 rounded-xl border-2 border-blue-400/30 bg-gradient-to-br from-[#f0f7ff] to-[#e0f2fe] px-5 py-2 font-bold tracking-wide shadow-[0_0_15px_rgba(96,165,250,0.2)]"
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div>
				<img src="/assets/coin.png" alt="Moeda" className="h-8 w-8" />
			</div>
			<span className="flex gap-1 font-bungee">{points} pontos ganhos</span>
		</motion.div>
	);
}

interface ActionButtonsProps {
	onGoHome: () => void;
	onPlayAgain: () => void;
}

function ActionButtons({ onGoHome, onPlayAgain }: ActionButtonsProps) {
	const homeColor: ColorScheme = {
		foreground: "#fff",
		dark: "#ddd",
		darker: "#ccc",
	};

	return (
		<div className="grid w-full max-w-2xl items-center gap-4 self-end md:self-start">
			<Button3D
				colorScheme={homeColor}
				className="h-14 w-full text-slate-600 brightness-98"
				icon={<HomeIcon strokeWidth={1} />}
				onClick={onGoHome}
			>
				Voltar ao início
			</Button3D>
			<Button3D
				icon={<RecycleIcon strokeWidth={1} />}
				className="h-14 w-full text-white uppercase tracking-wider"
				onClick={onPlayAgain}
			>
				Jogar Novamente
			</Button3D>
		</div>
	);
}
