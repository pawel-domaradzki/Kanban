"use client";

import React, { FC, ReactNode, useState } from "react";
import styles from "@/styles/components/ui/Modal.module.scss";

import * as Dialog from "@radix-ui/react-dialog";

import Button, { ButtonVariant } from "./ui/Button";
import { useBoardStore } from "@/store/BoardStore";

import { BoardTypes } from "@/types";
import classNames from "classnames";

interface WarnModalProps {
  type: string;
  activeBoard: BoardTypes;
  children: ReactNode;
}

const WarnModal: FC<WarnModalProps> = ({ children, type, activeBoard }) => {
  const { removeBoard } = useBoardStore();
  const handleRemove = () => {
    type === "board" ? removeBoard(activeBoard.id) : console.log("remove Task");
  };

  return (
    <Dialog.Root defaultOpen={false}>
      <Dialog.Trigger asChild aria-label="Add New Board">
        <div className={styles.CurrentBoard}>{children}</div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.DialogOverlay} />
        <Dialog.Content className={styles.DialogContent}>
          <Dialog.Title className={classNames(styles.DialogTitle, styles.Warn)}>
            Delete this board?
          </Dialog.Title>

          <div className={styles.ModalItem}>
            <p>
              {` Are you sure you want to delete the '${activeBoard.title}' board?
              This action will remove all columns and tasks and cannot be
              reversed.`}
            </p>
          </div>
          <Button variant={ButtonVariant.Destructive} onClick={handleRemove}>
            Delete
          </Button>
          <Dialog.Close asChild>
            <Button variant={ButtonVariant.Secondary}>Cancel</Button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default WarnModal;
