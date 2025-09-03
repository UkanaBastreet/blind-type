import { type FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import PersonIcon from "@shared/assets/person.svg?react";
import styles from "./Header.module.css";
import type { RootState } from "@app/store";
import { Icon } from "@shared/ui/icon/Icon";

export const Header: FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const username = useSelector((state: RootState) => state.auth.user?.username);

  return (
    <header className={styles.Header}>
      <Link to={"/"}>
        <div className={styles.logo}>
          <span className={styles.description}>dev by Ukana</span>
          <span className={styles.title}>Blind Type</span>
        </div>
      </Link>
      <div className={styles.user}>
        <Link to={"auth"}>
          <Icon>
            <PersonIcon />
            <span>{isAuthenticated && username ? username : "login"}</span>
          </Icon>
        </Link>
      </div>
    </header>
  );
};
