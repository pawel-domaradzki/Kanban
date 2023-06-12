"use client";

import React from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";

import styles from "@/styles/components/ui/Dropdown.module.scss";
import { CheckIcon, ChevronUpIcon, ChevronDownIcon } from "../icons";

interface DropdownItemProps extends Select.SelectItemProps {
  children: React.ReactNode;
  className?: string;
}

const Dropdown = () => (
  <Select.Root>
    <Select.Trigger className={styles.SelectTrigger} aria-label="TaskStatus">
      <Select.Value placeholder="Doing" />
      <Select.Icon className="SelectIcon">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content
        className={styles.SelectContent}
        position="popper"
        align="start"
        sideOffset={10}
      >
        <Select.ScrollUpButton className={styles.SelectScrollButton}>
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className={styles.SelectViewport}>
          <SelectItem value="doing">Doing</SelectItem>
          <SelectItem value="todo">Todo</SelectItem>
          <SelectItem value="done">Done</SelectItem>
        </Select.Viewport>
        <Select.ScrollDownButton className={styles.SelectScrollButton}>
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

export const SelectItem = React.forwardRef<HTMLDivElement, DropdownItemProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames(styles.SelectItem, className)}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className={styles.SelectItemIndicator}>
          <CheckIcon className={styles.Checked} />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);

SelectItem.displayName = "SelectItem";

export default Dropdown;
