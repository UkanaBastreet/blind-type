import { LoginForm } from "./LoginForm/LoginForm";
import { RegisterForm } from "./RegisterForm/RegisterForm";
import styles from "./AuthPage.module.css";
import { motion } from "framer-motion";

export const AuthPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={styles.AuthPage}
    >
      <RegisterForm />
      <LoginForm />
    </motion.div>
  );
};
