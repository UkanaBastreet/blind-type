import { type FC } from "react";
import PersonIcon from "../../assets/person.svg?react";
import styles from "./Header.module.css";
import { Button } from "../../ui/Button/Button";
import { Icon } from "../../ui/icon/Icon";

export const Header: FC = () => {
  return (
    <header className={styles.Header}>
      <div className="logo">
        <span className="description">dev by Ukana</span>
        <h1>Blind Type</h1>
      </div>
      <div className="user">
        <Icon>
          <PersonIcon />
        </Icon>
      </div>
    </header>
  );
};
