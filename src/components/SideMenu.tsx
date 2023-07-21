"use client";

import React, { FC } from "react";
import styles from "@/styles/components/SideMenu.module.scss";

import { ShowMenuIcon } from "./icons";
import Logo from "./Logo";
import BoardsList from "./ui/BoardsList";

interface SideMenuProps {
  displayedSideMenu: boolean;
  popDisplay: () => void;
}

const SideMenu: FC<SideMenuProps> = ({ displayedSideMenu, popDisplay }) => {
  return displayedSideMenu ? (
    <div className={styles.sideMenuWrapper}>
      <nav className={styles.SideMenuContainer}>
        <Logo />
        <BoardsList hideSideMenu={popDisplay} />
      </nav>
      <div className={styles.Placeholder}></div>
    </div>
  ) : (
    <div className={styles.PopButton} onClick={popDisplay}>
      <ShowMenuIcon className={styles.ShowMenuIcon} />
    </div>
  );
};

export default SideMenu;
