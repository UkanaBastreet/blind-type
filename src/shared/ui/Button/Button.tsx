import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.Button}>
      {children}
    </button>
  );
};
