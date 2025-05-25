import { motion } from "motion/react"
import { CoinIcon } from "../icons/coin"
import { useQuizStore } from "@/lib/zustand";

import styles from "./scoreDisplay.module.css";

export const ScoreDisplay = ({ score }: { score: number }) => {
  return ( <div className={styles.scoreContainer}>
      <motion.div
        key={score}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.3 }}
      >
        <CoinIcon />
      </motion.div>
      <span className="select-none font-bungee font-medium text-lg text-white tracking-wider sm:text-xl">
        {score}
      </span>
    </div>
  )
}
