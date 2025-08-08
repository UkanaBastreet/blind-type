import type { FC, ReactNode } from "react";
import styles from "./Icon.module.css";

interface IconProps {
  children?: ReactNode;
}

export const Icon: FC<IconProps> = ({ children }) => {
  return <span className={styles.Icon}>{children}</span>;
};
