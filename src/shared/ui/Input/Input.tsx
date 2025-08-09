import type { FC, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  color?: string;
}

export const Input: FC<InputProps> = ({ ...props }) => {
  return (
    <>
      <input className={styles.Input} {...props} />
    </>
  );
};
