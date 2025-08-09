import { LoginForm } from "./components/LoginForm/LoginForm";
import { RegisterForm } from "./components/RegisterForm/RegisterForm";
import styles from "./AuthPage.module.css";

export const AuthPage = () => {
  return (
    <div className={styles.AuthPage}>
      <RegisterForm />
      <LoginForm />
    </div>
  );
};
