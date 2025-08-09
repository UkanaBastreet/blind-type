import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const AuthPage = () => {
  return (
    <div
      className="auth-page"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <RegisterForm />
      <LoginForm />
    </div>
  );
};
