import React, { FC } from "react";
import classNames from "classnames";
import styles from "@/styles/components/ui/Button.module.scss";

interface ButtonProps {
  variant: string;
  children: React.ReactNode;
}

export enum ButtonVariant {
  Primary = "Primary",
  Secondary = "Secondary",
  Destructive = "Destructive",
}

const Button: FC<ButtonProps> = ({
  variant = ButtonVariant.Primary,
  children,
}: ButtonProps) => {
  return (
    <button className={classNames(styles.Button, styles[variant])}>
      {children}
    </button>
  );
};

export default Button;
