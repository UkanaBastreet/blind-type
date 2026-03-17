import React from "react";
import styles from "./Title.module.css";

interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children, ...props }) => {
  return (
    <div {...props} className={styles.title + " " + props.className}>
      {children}
    </div>
  );
};
