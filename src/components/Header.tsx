"use client";

import Logo from "./Logo";
import DisplayBoards from "./DisplayBoards";
import styles from "@/styles/components/Header.module.scss";
import Button, { ButtonVariant } from "./ui/Button";
import { PlusIcon, VerticalEllipsisIcon } from "./icons";

import { useBoardStore } from "@/store/BoardStore";
import AddNewTaskModal from "./AddNewTaskModal";
import classNames from "classnames";
import Options from "./Options";
import { KanbanTypes } from "@/types";

const Header = ({ displayedSideMenu }: { displayedSideMenu: boolean }) => {
  const { boards, activeBoardId } = useBoardStore();
  const activeBoard = boards.find(({ id }) => id === activeBoardId);

  return (
    <header className={styles.Header}>
      <nav className={styles.Wrapper}>
        <div className={styles.Start}>
          {!displayedSideMenu ? <Logo passStyles="border" /> : <></>}
          <DisplayBoards showIcon />
        </div>

        {activeBoard && activeBoard.columns.length ? (
          <div className={styles.End}>
            <AddNewTaskModal activeBoard={activeBoard}>
              <Button btnType="Add">
                <PlusIcon />
                <span className={styles.SpanText}>Add New Task</span>
              </Button>
            </AddNewTaskModal>
            <Options
              activeBoard={activeBoard}
              optionsType={KanbanTypes.Board}
            />
          </div>
        ) : (
          <div className={classNames(styles.End, styles.Disabled)}>
            <Button variant={ButtonVariant.Disabled} btnType="Add">
              <PlusIcon />
              <span className={styles.SpanText}>Add New Task</span>
            </Button>
            <VerticalEllipsisIcon />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
