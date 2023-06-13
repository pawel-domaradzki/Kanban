"use client";

import React, { FC } from "react";
import styles from "@/styles/components/ui/TextInput.module.scss";

interface TextInputProps {
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
}

const TextInput: FC<TextInputProps> = ({ placeholder, value }) => {
  return (
    <input
      className={styles.TextInput}
      type="text"
      value={value}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
