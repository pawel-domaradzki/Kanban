import { create } from "zustand";

import { BoardTypes, ColumnTypes, TaskTypes, SubtaskTypes } from "@/types";
import { sampleData } from "./boards";

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
  updateBoard: (updatedBoard: BoardTypes) => void;
  removeBoard: (removedBoardId: string) => void;
  removeTask: (columnId: string, removedTaskId: string) => void;
  updateTask: (columnId: string, updatedTask: TaskTypes) => void;
  toggleSubtaskCompletion: (taskId: string, subtaskId: string) => void;
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
  updateBoard: (updatedBoard) =>
    set((state) => {
      const updatedBoards = state.boards.map((board) =>
        board.id === updatedBoard.id ? updatedBoard : board
      );
      return { boards: updatedBoards };
    }),
  removeBoard: (boardIdToRemove) =>
    set((state) => {
      const updatedBoards = state.boards.filter(
        (board) => board.id !== boardIdToRemove
      );
      return { boards: updatedBoards };
    }),
  removeTask: (columnId, taskId) =>
    set((state) => {
      const activeBoard = state.boards.find(
        (board) => board.id === state.activeBoardId
      );
      if (!activeBoard) return {};

      const updatedColumns = activeBoard.columns.map((column) =>
        column.id === columnId
          ? {
              ...column,
              tasks: column.tasks.filter((task) => task.id !== taskId),
            }
          : column
      );

      const updatedBoard = { ...activeBoard, columns: updatedColumns };
      const updatedBoards = state.boards.map((board) =>
        board.id === state.activeBoardId ? updatedBoard : board
      );

      return { boards: updatedBoards };
    }),
  updateTask: (columnId, updatedTask) =>
    set((state) => {
      const activeBoard = state.boards.find(
        (board) => board.id === state.activeBoardId
      );
      if (!activeBoard) return {};

      const updatedColumns = activeBoard.columns.map((column) => {
        if (column.id === columnId) {
          const updatedTasks = column.tasks.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
          );
          return { ...column, tasks: updatedTasks };
        }
        return column;
      });

      const updatedBoard = { ...activeBoard, columns: updatedColumns };
      const updatedBoards = state.boards.map((board) =>
        board.id === state.activeBoardId ? updatedBoard : board
      );

      return { boards: updatedBoards };
    }),
  toggleSubtaskCompletion: (taskId, subtaskId) => {
    set((state) => {
      const updatedBoards = state.boards.map((board) => {
        const updatedColumns = board.columns.map((column) => {
          const updatedTasks = column.tasks.map((task) => {
            if (task.id === taskId) {
              const updatedSubtasks = task.subtasks.map((subtask) =>
                subtask.id === subtaskId
                  ? { ...subtask, completed: !subtask.completed }
                  : subtask
              );
              return { ...task, subtasks: updatedSubtasks };
            }
            return task;
          });
          return { ...column, tasks: updatedTasks };
        });
        return { ...board, columns: updatedColumns };
      });
      return { boards: updatedBoards };
    });
  },
}));
