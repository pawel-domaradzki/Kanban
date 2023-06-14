"use client";

import React, { FC } from "react";
import { boardsMock } from "@/store/boards";
import { BoardIcon, ChevronDownIcon } from "./icons";
import styles from "@/styles/components/DisplayBoards.module.scss";
import * as Dialog from "@radix-ui/react-dialog";
import ThemeSwitch from "./ui/ThemeSwitch";

const DisplayBoards: FC = () => {
  const board = boardsMock[0];
  return (
    <Dialog.Root>
      <Dialog.Trigger aria-label="Display Boards">
        <div className={styles.CurrentBoard}>
          <h1>{board.title}</h1>
          <ChevronDownIcon className={styles.ChevronIcon} />
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <Dialog.Content className={styles.DialogContent}>
          <Dialog.Title className={styles.DialogTitle}>
            All Boards ({boardsMock.length})
          </Dialog.Title>
          <Dialog.Description className={styles.BoardsList}>
            <div className={styles.ActiveBoard}>
              <BoardIcon />
              <h2>{boardsMock[0].title}</h2>
            </div>
            <div>
              <BoardIcon />
              <h2>{boardsMock[1].title}</h2>
            </div>
            <div>
              <BoardIcon />
              <h2>{boardsMock[2].title}</h2>
            </div>
            <button className={styles.CreateNewBoard}>
              <BoardIcon />
              <h2>+Create New Board</h2>
            </button>
          </Dialog.Description>
          <div className={styles.ThemeSwitchWrapper}>
            <ThemeSwitch />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DisplayBoards;
