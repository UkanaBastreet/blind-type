import "./App.css";
import { Layout } from "./components/ui/Layout";
import { HomePage } from "./Pages/home/home.page";

function App() {
  return (
    <div className="App">
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
}
export default App;
