"use client"

// src/components/feedback-slider/FeedbackSlider.tsx
import type React from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon, XCircleIcon } from "lucide-react"; // Ícones para feedback visual
import { CoinIcon } from "@/components/icons/coin"; // Reutilizar o ícone de moeda

// Definindo as props que o componente receberá
interface FeedbackSliderProps {
  isCorrect: boolean;
  correctAnswerText?: string; // Texto da resposta correta (opcional, só para respostas erradas)
  pointsEarned?: number; // Pontos ganhos (opcional, só para respostas corretas)
  onNext: () => void; // Função para chamar ao clicar no botão
  isLastQuestion: boolean; // Para saber se é a última questão
}

export const FeedbackSlider: React.FC<FeedbackSliderProps> = ({
  isCorrect,
  correctAnswerText,
  pointsEarned,
  onNext,
  isLastQuestion,
}) => {
  const feedbackVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
    exit: { y: "100%", opacity: 0, transition: { ease: "easeInOut", duration: 0.3 } },
  };

  // Estilos baseados na correção
  const bgColor = isCorrect ? "bg-green-500" : "bg-red-500";
  const gradientColor = isCorrect
    ? "from-green-400 to-green-600"
    : "from-red-400 to-red-600";
  const buttonColor = isCorrect
    ? "bg-green-700 hover:bg-green-800"
    : "bg-red-700 hover:bg-red-800";
  const Icon = isCorrect ? CheckCircleIcon : XCircleIcon;
  const iconColor = isCorrect ? "text-green-100" : "text-red-100";

  return (
    <motion.div
      key={isCorrect ? "correct" : "incorrect"} // Garante re-animação se o estado mudar (embora geralmente não mude enquanto visível)
      variants={feedbackVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      // Role alert para acessibilidade: anuncia o resultado automaticamente
      role="alert"
      aria-live="assertive"
      className={`fixed bottom-0 left-0 right-0 z-40 w-full p-4 sm:p-6 text-white shadow-lg-top rounded-t-2xl bg-gradient-to-t ${gradientColor}`}
      style={{ boxShadow: '0 -4px 15px rgba(0, 0, 0, 0.1)' }} // Sombra no topo
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Seção de Feedback (Ícone e Texto) */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <Icon className={`h-10 w-10 sm:h-12 sm:w-12 ${iconColor}`} />
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-bungee tracking-wide">
              {isCorrect ? "Correto!" : "Incorreto"}
            </h3>
            {isCorrect && pointsEarned && (
              <div className="mt-1 flex items-center justify-center sm:justify-start gap-1 font-semibold text-sm sm:text-base">
                <CoinIcon color="yellow" />
                <span>+{pointsEarned} Pontos!</span>
              </div>
            )}
            {!isCorrect && correctAnswerText && (
              <p className="mt-1 text-sm sm:text-base font-medium text-indigo-100">
                Resposta correta:{" "}
                <strong className="font-bold text-white">{correctAnswerText}</strong>
              </p>
            )}
          </div>
        </div>

        {/* Botão de Próxima Ação */}
        <button
          onClick={onNext}
          // Foco automático no botão quando o slider aparece pode ser bom para acessibilidade
          // autoFocus
          className={`w-full sm:w-auto transform rounded-xl px-6 py-3 font-bold shadow-md transition-all duration-150 ease-in-out hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white ${buttonColor}`}
        >
          {isLastQuestion ? "Finalizar Quiz" : "Próxima Questão"}
        </button>
      </div>
    </motion.div>
  );
};
