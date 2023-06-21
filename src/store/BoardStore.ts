import { create } from "zustand";

import { BoardTypes, ColumnTypes, TaskTypes, SubtaskTypes } from "@/types";

interface BoardStore {
  boards: BoardTypes[];
  activeBoardId: string;
  addColumn: (boardId: string, column: ColumnTypes) => void;
  addBoard: (board: BoardTypes) => void;
  setActiveBoard: (activeBoardId: string) => void;
  addTask: (boardId: string, columnId: string, task: TaskTypes) => void;
  moveTask: (
    boardId: string,
    sourceColumnId: string,
    destinationColumnId: string,
    sourceIndex: number,
    destinationIndex: number
  ) => void;
  moveColumn: (
    boardId: string,
    sourceIndex: number,
    destinationIndex: number
  ) => void;
}

export const useBoardStore = create<BoardStore>((set) => ({
  boards: [],
  activeBoardId: "",
  addBoard: (board) => set((state) => ({ boards: [...state.boards, board] })),
  setActiveBoard: (activeBoardId) =>
    set(() => ({ activeBoardId: activeBoardId })),
  addColumn: (boardId, column) =>
    set((state) => {
      const updatedBoards = state.boards.map((board) =>
        board.id === boardId
          ? { ...board, columns: [...board.columns, column] }
          : board
      );
      return { boards: updatedBoards };
    }),
  addTask: (boardId, columnId, task) =>
    set((state) => {
      const updatedBoards = state.boards.map((board) => {
        if (board.id === boardId) {
          const updatedColumns = board.columns.map((column) =>
            column.id === columnId
              ? { ...column, tasks: [...column.tasks, task] }
              : column
          );
          return { ...board, columns: updatedColumns };
        }
        return board;
      });
      return { boards: updatedBoards };
    }),
  moveTask: (
    boardId,
    sourceColumnId,
    destinationColumnId,
    sourceIndex,
    destinationIndex
  ) => {
    set((state) => {
      const board = state.boards.find((board) => board.id === boardId);
      const sourceColumn = board?.columns.find(
        (column) => column.id === sourceColumnId
      );
      const destinationColumn = board?.columns.find(
        (column) => column.id === destinationColumnId
      );
      const taskToMove = sourceColumn?.tasks.splice(sourceIndex, 1)[0] ?? null;

      if (taskToMove) {
        destinationColumn?.tasks.splice(destinationIndex, 0, taskToMove);
      }

      return { boards: state.boards };
    });
  },
  moveColumn: (boardId, sourceIndex, destinationIndex) => {
    set((state) => {
      const board = state.boards.find((board) => board.id === boardId);
      const columnToMove = board?.columns.splice(sourceIndex, 1)[0] ?? null;

      if (columnToMove) {
        board?.columns.splice(destinationIndex, 0, columnToMove);
      }

      return { boards: state.boards };
    });
  },
}));
