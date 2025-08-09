import { useSelector } from "react-redux";
import "./styles/App.css";
import { Layout } from "../shared/widgets/Layout/Layout";
import type { RootState } from "./store";
import { Outlet } from "react-router";

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
