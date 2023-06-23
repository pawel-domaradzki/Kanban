"use client";

import React, { FC } from "react";
import { BoardIcon, ChevronDownIcon } from "./icons";
import styles from "@/styles/components/DisplayBoards.module.scss";
import * as Dialog from "@radix-ui/react-dialog";
import ThemeSwitch from "./ui/ThemeSwitch";
import { useBoardStore } from "@/store/BoardStore";
import AddNewBoardModal from "./AddNewBoardModal";
import classNames from "classnames";

const DisplayBoards: FC = () => {
  const { setActiveBoard } = useBoardStore();
  const boards = useBoardStore((state) => state.boards);

  const activeBoardId = useBoardStore((state) => state.activeBoardId);

  const activeBoard = boards.find(({ id }) => id === activeBoardId);

  return (
    <>
      {boards.length ? (
        <Dialog.Root>
          <Dialog.Trigger
            aria-label="Display Boards"
            onClick={() => console.log(boards)}
          >
            <div className={styles.CurrentBoard}>
              <h1 className={styles.BoardTitle}>{activeBoard?.title}</h1>
              <ChevronDownIcon className={styles.ChevronIcon} />
            </div>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className={styles.DialogOverlay} />
            <Dialog.Content className={styles.DialogContent}>
              <Dialog.Title className={styles.DialogTitle}>
                All Boards ({boards.length})
              </Dialog.Title>
              <div className={styles.BoardsList}>
                {boards.map((board) => (
                  <div
                    key={board.id}
                    className={classNames(
                      styles.BoardItem,
                      board.id === activeBoardId ? styles.ActiveBoard : ""
                    )}
                    onClick={() => setActiveBoard(board.id)}
                  >
                    <BoardIcon className={styles.BoardIcon} />
                    <h2 className={styles.BoardTitle}>{board.title}</h2>
                  </div>
                ))}

                <AddNewBoardModal>
                  <button className={styles.CreateNewBoard}>
                    <BoardIcon />
                    <h2>+Create New Board</h2>
                  </button>
                </AddNewBoardModal>
              </div>
              <div className={styles.ThemeSwitchWrapper}>
                <ThemeSwitch />
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      ) : (
        <AddNewBoardModal>
          <button>
            <h2>+Create New Board</h2>
          </button>
        </AddNewBoardModal>
      )}
    </>
  );
};

export default DisplayBoards;
