import { useSelector } from "react-redux";
import "./styles/App.css";
import { Layout } from "../shared/widgets/Layout/Layout";
import { GamePage } from "../features/game/GamePage";
import type { RootState } from "./store";

function App() {
  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <div className={"App " + theme}>
      <Layout>
        <GamePage />
      </Layout>
    </div>
  );
}
export default App;
