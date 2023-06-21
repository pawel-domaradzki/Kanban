"use client";

import React, { FC, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import styles from "@/styles/components/BoardOptions.module.scss";
import { VerticalEllipsisIcon } from "./icons";
import { useBoardStore } from "@/store/BoardStore";
import EditBoardModal from "./EditBoardModal";
import { BoardTypes } from "@/types";
import WarnModal from "./WarnModal";

interface BoardOptionsProps {
  activeBoard: BoardTypes;
}

const BoardOptions: FC<BoardOptionsProps> = ({ activeBoard }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <Popover.Trigger asChild aria-label="Board Options">
        <button className={styles.PopoverBtn}>
          <VerticalEllipsisIcon />
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className={styles.PopoverContent}
          sideOffset={20}
          align="end"
        >
          <EditBoardModal
            activeBoard={activeBoard}
            hideBoardOptions={setIsOpen}
          >
            <button>
              <h3 className={styles.Edit}>Edit Board</h3>
            </button>
          </EditBoardModal>

          <WarnModal type="board" activeBoard={activeBoard}>
            <button>
              <h3 className={styles.Delete}>Delete Board</h3>
            </button>
          </WarnModal>

          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default BoardOptions;
