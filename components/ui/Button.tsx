import React, { FC } from "react";
import classNames from "classnames";
import styles from "@/styles/components/ui/Button.module.scss";

interface ButtonProps {
  variant: string;
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  children,
}: ButtonProps) => {
  return <button className={classNames(styles[variant])}>Button</button>;
};

export default Button;
