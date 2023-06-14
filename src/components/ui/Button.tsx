import React, { FC } from "react";
import classNames from "classnames";
import styles from "@/styles/components/ui/Button.module.scss";

interface ButtonProps {
  variant?: string;
  btnType?: string;
  children: React.ReactNode;
}

export enum ButtonVariant {
  Primary = "Primary",
  Secondary = "Secondary",
  Destructive = "Destructive",
}

const Button: FC<ButtonProps> = ({
  variant = ButtonVariant.Primary,
  btnType = "Text",
  children,
}: ButtonProps) => {
  return (
    <button
      aria-label={`${variant}${btnType}`}
      className={classNames(styles.Button, styles[variant], styles[btnType])}
    >
      {children}
    </button>
  );
};

export default Button;
