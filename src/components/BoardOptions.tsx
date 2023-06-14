"use client";

import React, { FC } from "react";
import * as Popover from "@radix-ui/react-popover";
import styles from "@/styles/components/BoardOptions.module.scss";
import { VerticalEllipsisIcon } from "./icons";

interface BoardOptionsProps {}

const BoardOptions: FC<BoardOptionsProps> = ({}) => {
  return (
    <Popover.Root>
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
          <h3 className={styles.Edit}>Edit Board</h3>
          <h3 className={styles.Delete}>Delete Board</h3>
          <Popover.Close />
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default BoardOptions;
