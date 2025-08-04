import { FC, useState } from "react";

export const LoginForm: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function login(){}
  return (
    <>
      <div>
        {" "}
        <input
          type="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <input
          type="text"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button onClick={login}>Login</button>
      </div>
    </>
  );
};
