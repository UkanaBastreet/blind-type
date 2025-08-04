import { useSelector } from "react-redux";
import { Layout } from "src/shared/widgets/Layout/Layout";
import { GamePage } from "src/features/game/GamePage";
import { RootState } from "./store";
import "./styles/App.css";

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
