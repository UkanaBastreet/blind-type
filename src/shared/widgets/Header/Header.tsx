import { type FC } from "react";
import PersonIcon from "../../assets/person.svg?react";
import styles from "./Header.module.css";
import { Icon } from "../../ui/icon/Icon";
import { Link } from "react-router";

export const Header: FC = () => {
  return (
    <header className={styles.Header}>
      <Link to={"/"}>
        <div className={styles.logo}>
          <span className={styles.description}>dev by Ukana</span>
          <h1>Blind Type</h1>
        </div>
      </Link>
      <div className={styles.user}>
        <Link to={"auth"}>
          <Icon>
            <PersonIcon />
          </Icon>
        </Link>
      </div>
    </header>
  );
};
