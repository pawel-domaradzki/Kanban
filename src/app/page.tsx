"use client";

import Board from "@/components/Board/Board";
import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import { useState } from "react";

export default function Home() {
  const [displayedSideMenu, setDisplayedSideMenu] = useState(false);

  const handlePopSideMenu = () => {
    setDisplayedSideMenu(!displayedSideMenu);
  };

  return (
    <div className="Wrapper">
      <SideMenu
        displayedSideMenu={displayedSideMenu}
        popDisplay={handlePopSideMenu}
      />
      <main className="AppContainer">
        <Header displayedSideMenu={displayedSideMenu} />

        <Board displayedSideMenu={displayedSideMenu} />
      </main>
    </div>
  );
}
