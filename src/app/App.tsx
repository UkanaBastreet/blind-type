import { Provider } from "react-redux";
import { Layout } from "src/shared/ui/Layout";
import { GamePage } from "src/features/game/GamePage";
import { store } from "./store";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout>
          <GamePage />
        </Layout>
      </Provider>
    </div>
  );
}
export default App;
