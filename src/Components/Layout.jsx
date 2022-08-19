import React from "react";
import { Header } from "./Header";

export const Layout = ({ children, theme, setTheme }) => {
  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      {children}
    </>
  );
};
