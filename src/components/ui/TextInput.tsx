"use client";

import React, { FC } from "react";
import styles from "@/styles/components/ui/TextInput.module.scss";
import { CrossIcon } from "../icons";

interface TextInputProps {
  placeholder: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value: any) => void;
}

export const TextInput: FC<TextInputProps> = ({
  placeholder,
  value,
  defaultValue,
  onChange,
}) => {
  return (
    <input
      className={styles.TextInput}
      type="text"
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export const TextInputDrag: FC<TextInputProps> = ({
  placeholder,
  value,
  defaultValue,
}) => {
  return (
    <div className={styles.InputDragContainer}>
      <input
        className={styles.TextInput}
        type="text"
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
      />
      <CrossIcon />
    </div>
  );
};

export default TextInput;
