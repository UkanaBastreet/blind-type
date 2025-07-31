import "./App.css";
import { GameField } from "./components/GameField";
import { Layout } from "./components/ui/Layout";

function App() {
  return (
      <div className="App">
        <Layout>
          <GameField />
        </Layout>
      </div>
  );
}
export default App;
