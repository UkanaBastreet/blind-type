import { FC, ReactNode } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import "./Layout.css";

interface LayoutProps {
  children?: ReactNode;
}
export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
