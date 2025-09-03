import { useSelector } from "react-redux";
import "./styles/App.css";
import type { RootState } from "./store";
import { Outlet } from "react-router";
import { Layout } from "@shared/widgets";

function App() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div className={"App " + theme}>
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}
export default App;
