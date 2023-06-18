import { Board } from "@/types";
import { create } from "zustand";

interface BoardStore {
  boards: Board[];
  activeBoardId: string;
  addBoard: (board: Board) => void;
  setActiveBoard: (activeBoardId: string) => void;
}

export const useBoardStore = create<BoardStore>((set) => ({
  boards: [],
  activeBoardId: "",
  setActiveBoard: (activeBoardId) =>
    set(() => ({ activeBoardId: activeBoardId })),
  addBoard: (board) => set((state) => ({ boards: [...state.boards, board] })),
}));
