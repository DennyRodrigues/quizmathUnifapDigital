import { LEVELS, LevelInfo } from "@/types/quiz";
import { atom } from "jotai";

export const levelAtom = atom<LevelInfo>(LEVELS[0]);

export const scoreAtom = atom(0);
