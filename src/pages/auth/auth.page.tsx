import { Outlet } from "react-router-dom";

export const AuthPage = () => {
  return (
    <div
      className="auth-page"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Outlet />
    </div>
  );
};
