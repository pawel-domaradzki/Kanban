"use client";

import React, { FC, ReactNode, useState } from "react";
import styles from "@/styles/components/ui/Modal.module.scss";
import * as Dialog from "@radix-ui/react-dialog";

import TextInput, { TextInputDrag } from "./ui/TextInput";
import { v4 as uuidv4 } from "uuid";
import Button, { ButtonVariant } from "./ui/Button";
import { useBoardStore } from "@/store/BoardStore";
import { Board } from "@/types";

interface AddNewBoardModalProps {
  children: ReactNode;
}

const AddNewBoardModal: FC<AddNewBoardModalProps> = ({ children }) => {
  const [boardName, setBoardName] = useState("");
  const { addBoard, setActiveBoard } = useBoardStore();

  const handleAddBoard = () => {
    const newBoard: Board = {
      title: boardName,
      id: uuidv4(),
      columns: [],
    };

    addBoard(newBoard);
    setActiveBoard(newBoard.id);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild aria-label="Add New Board">
        <div className={styles.CurrentBoard}>{children}</div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <Dialog.Content className={styles.DialogContent}>
          <Dialog.Title className={styles.DialogTitle}>
            Add New Board
          </Dialog.Title>
          <div className={styles.ModalItem}>
            <label htmlFor="Board Name">Board Name</label>
            <TextInput
              placeholder="e.g Web Design"
              value={boardName}
              onChange={(e) => setBoardName(e.target.value)}
            />
          </div>

          <div className={styles.ModalItem}>
            <label htmlFor="Board Columns">Board Columns</label>
            <TextInputDrag placeholder="e.g Todo" defaultValue="Todo" />
            <TextInputDrag placeholder="e.g Doing" defaultValue="Doing" />
          </div>
          <Button variant={ButtonVariant.Secondary}>+ Add New Column</Button>
          <Dialog.Close asChild>
            <Button onClick={handleAddBoard}>Create New Board</Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AddNewBoardModal;
