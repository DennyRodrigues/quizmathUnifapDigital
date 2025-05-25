import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { questoes as allQuestionsData, Dificuldade, Questao } from '@/lib/questions_data';


const COINS_PER_CORRECT_ANSWER = 60;
const MULTIPLIERS: Record<Dificuldade, number> = {
	'Fácil': 1.0,
	'Médio': 1.5,
	'Difícil': 2.0,
};
const QUESTIONS_COUNT_RULES: Record<Dificuldade, { 'Fácil'?: number; 'Médio'?: number; 'Difícil'?: number }> = {
	'Fácil': { 'Fácil': 8 },
	'Médio': { 'Fácil': 5, 'Médio': 5 },
	'Difícil': { 'Fácil': 2, 'Médio': 4, 'Difícil': 6 },
};

function shuffleArray<T>(array: T[]): T[] {
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}

function selectRandomQuestions(questions: Questao[], count: number): Questao[] {
	if (count <= 0) return [];
	if (count >= questions.length) return shuffleArray(questions);
	return shuffleArray(questions).slice(0, count);
}

interface QuizState {
	selectedDifficulty: Dificuldade ;
	allQuestions: Questao[];
	quizQuestions: Questao[];
	currentQuestionIndex: number;
	userAnswers: Record<number, number | null>;
	quizState: 'idle' | 'selecting' | 'playing' | 'finished';
	sessionCoins: number;
	globalCoins: number;
	setDifficulty: (difficulty: Dificuldade) => void;
	startQuiz: () => boolean;
	answerQuestion: (questionIndex: number, answerIndex: number) => void;
	nextQuestion: () => void;
	finishQuiz: () => void;
	resetQuiz: () => void;
}

export const useQuizStore = create<QuizState>()(
	persist(
		(set, get) => ({
			selectedDifficulty: 'Fácil',
			allQuestions: allQuestionsData,
			quizQuestions: [],
			currentQuestionIndex: 0,
			userAnswers: {},
			quizState: 'idle',
			sessionCoins: 0,
			globalCoins: 0,

			setDifficulty: (difficulty) => {
				set({ selectedDifficulty: difficulty, quizState: 'selecting' });
			},

			startQuiz: () => {
				const { selectedDifficulty, allQuestions } = get();
				if (!selectedDifficulty) {
					console.error("Cannot start quiz: No difficulty selected.");
					return false;
				}

				const rules = QUESTIONS_COUNT_RULES[selectedDifficulty];
				const selectedForQuiz: Questao[] = [];

				const easyQuestions = allQuestions.filter(q => q.dificuldade === 'Fácil');
				const mediumQuestions = allQuestions.filter(q => q.dificuldade === 'Médio');
				const hardQuestions = allQuestions.filter(q => q.dificuldade === 'Difícil');

				if (rules['Fácil']) {
					selectedForQuiz.push(...selectRandomQuestions(easyQuestions, rules['Fácil']));
				}
				if (rules['Médio']) {
					selectedForQuiz.push(...selectRandomQuestions(mediumQuestions, rules['Médio']));
				}
				if (rules['Difícil']) {
					selectedForQuiz.push(...selectRandomQuestions(hardQuestions, rules['Difícil']));
				}

				const finalQuizQuestions = shuffleArray(selectedForQuiz);

				console.log(JSON.stringify(finalQuizQuestions, null, 2));

				set({
					quizQuestions: finalQuizQuestions,
					currentQuestionIndex: 0,
					userAnswers: {},
					sessionCoins: 0,
					quizState: 'playing',
				});
				return true;
			},

			answerQuestion: (questionIndex, answerIndex) => {
				const { quizQuestions, userAnswers } = get();
				const question = quizQuestions[questionIndex];

				if (!question || userAnswers[questionIndex] !== undefined && userAnswers[questionIndex] !== null) {
					return;
				}

				set((state) => ({
					userAnswers: {
						...state.userAnswers,
						[questionIndex]: answerIndex,
					},
				}));

				if (answerIndex === question.respostaCorreta) {
					const multiplier = MULTIPLIERS[question.dificuldade];
					const coinsEarned = Math.round(COINS_PER_CORRECT_ANSWER * multiplier);
					set((state) => ({
						sessionCoins: state.sessionCoins + coinsEarned,
					}));
				}
			},

			nextQuestion: () => {
				const { currentQuestionIndex, quizQuestions } = get();
				if (currentQuestionIndex < quizQuestions.length - 1) {
					set((state) => ({
						currentQuestionIndex: state.currentQuestionIndex + 1,
					}));
				} else {
					get().finishQuiz();
				}
			},

			finishQuiz: () => {
				if (get().quizState !== 'playing') return;

				set((state) => ({
					quizState: 'finished',
					globalCoins: state.globalCoins + state.sessionCoins,
				}));
			},

			resetQuiz: () => {
				set((state ) => ({
					selectedDifficulty: state.selectedDifficulty,
					quizQuestions: [],
					currentQuestionIndex: 0,
					userAnswers: {},
					sessionCoins: 0,
					quizState: 'idle',
				}));
			},
		}),
		{
			name: 'quiz-storage',
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({ globalCoins: state.globalCoins }),
		}
	)
);

export const useCurrentQuestion = () => useQuizStore((state) => state.quizQuestions[state.currentQuestionIndex]);

export const useQuizProgress = () => useQuizStore((state) => ({
	currentIndex: state.currentQuestionIndex,
	totalQuestions: state.quizQuestions.length,
}));

export const useQuizResults = () => useQuizStore((state) => {
	if (state.quizState !== 'finished') return null;

	const totalQuestions = state.quizQuestions.length;
	let correctAnswers = 0;

	state.quizQuestions.forEach((q, index) => {
		if (state.userAnswers[index] === q.respostaCorreta) {
			correctAnswers++;
		}
	});

	const percentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

	return {
		correctAnswers,
		totalQuestions,
		percentage,
		sessionCoins: state.sessionCoins,
		globalCoins: state.globalCoins,
	};
});
