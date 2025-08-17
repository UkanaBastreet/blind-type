import type { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  size?: "small" | "common" | "big";
}

export const Button: FC<ButtonProps> = ({
  children,
  size = "common",
  ...props
}) => {
  return (
    <button {...props} className={styles.Button + " " + styles[size]}>
      {children}
    </button>
  );
};
