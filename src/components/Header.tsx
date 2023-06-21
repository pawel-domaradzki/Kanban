"use client";

import { FC, ReactNode } from "react";
import Logo from "./Logo";
import DisplayBoards from "./DisplayBoards";
import styles from "@/styles/components/Header.module.scss";
import Button, { ButtonVariant } from "./ui/Button";
import { PlusIcon } from "./icons";
import BoardOptions from "./BoardOptions";
import { useBoardStore } from "@/store/BoardStore";
import AddNewTaskModal from "./AddNewTaskModal";

const Header: FC = () => {
  const { boards, activeBoardId } = useBoardStore();
  const activeBoard = boards.find(({ id }) => id === activeBoardId);

  return (
    <header className={styles.Header}>
      <nav className={styles.Wrapper}>
        <div className={styles.Start}>
          <Logo />
          <DisplayBoards />
        </div>

        <div className={styles.End}>
          {activeBoard ? (
            <AddNewTaskModal activeBoard={activeBoard}>
              <Button btnType="Add">
                <PlusIcon />
              </Button>
            </AddNewTaskModal>
          ) : (
            <Button btnType="Add" variant={ButtonVariant.Disabled}>
              <PlusIcon />
            </Button>
          )}

          <BoardOptions />
        </div>
      </nav>
    </header>
  );
};

export default Header;
