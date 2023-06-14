import { FC, ReactNode } from "react";
import Logo from "./Logo";
import DisplayBoards from "./DisplayBoards";
import styles from "@/styles/components/Header.module.scss";
import Button from "./ui/Button";
import { PlusIcon } from "./icons";
import BoardOptions from "./BoardOptions";

const Header: FC = () => {
  return (
    <header className={styles.Header}>
      <nav className={styles.Wrapper}>
        <div className={styles.Start}>
          <Logo />
          <DisplayBoards />
        </div>

        <div className={styles.End}>
          <Button btnType="Add">
            <PlusIcon />
          </Button>
          <BoardOptions />
        </div>
      </nav>
    </header>
  );
};

export default Header;
