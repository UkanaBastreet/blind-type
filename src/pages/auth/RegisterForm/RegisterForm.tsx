import { useState, type FC } from "react";
import styles from "./RegisterForm.module.css";
import axios from "axios";
import { Button } from "@shared/ui/Button/Button";
import { Input } from "@shared/ui/Input/Input";

export const RegisterForm: FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className={styles.RegisterForm}>
        <span className={styles.title}>register</span>
        <Input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <Button onClick={() => register(username, email, password)}>
          sign up
        </Button>
      </div>
    </>
  );
};

async function register(username: string, email: string, password: string) {
  console.log(" user data: ", username, email, password);
  const res = await axios
    .post(
      // process.env.REACT_APP_API_URL + "/auth/register",
      "http://localhost:4000/auth/register",
      {
        username,
        email,
        password,
      }
    )
    .then((res) => {
      console.log("res : ", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log("err : ", err.response.data);
      return err.response.data;
    });
  return res.data;
}
