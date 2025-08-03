import { Provider } from "react-redux";
import "./App.css";
import { GamePage } from "./pages/home/GamePage";
import { Layout } from "./ui/Layout";
import { store } from "./store/store";

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
