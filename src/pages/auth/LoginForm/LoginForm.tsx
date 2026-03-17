import { type FC, useState } from "react";
import styles from "./LoginForm.module.css";
import { Input } from "../../../shared/ui/Input/Input";
import { Button } from "../../../shared/ui/Button/Button";
import { Title } from "@shared/ui/Title/Title";

export const LoginForm: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function login() {}
  return (
    <>
      <div className={styles.LoginForm}>
        <Title>login</Title>
        <Input
          type="email"
          value={email}
          placeholder="email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
        <Input
          type="text"
          value={password}
          placeholder="password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button onClick={login}>sign in</Button>
        <a>Forgot password ?</a>
      </div>
    </>
  );
};
