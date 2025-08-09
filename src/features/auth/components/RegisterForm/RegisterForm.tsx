import { type FC } from "react";
import { Button } from "../../../../shared/ui/Button/Button";
import styles from './RegisterForm.module.css'
import { Input } from "../../../../shared/ui/Input/Input";

export const RegisterForm: FC = () => {
  return (
    <>
      <div className={styles.RegisterForm}>
        <span className={styles.title}>register</span>
        <Input type="text" placeholder="username" />
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="password" />
        <Button>sign up</Button>
      </div>
    </>
  );
};
