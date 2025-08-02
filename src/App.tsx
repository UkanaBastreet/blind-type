import { Provider } from "react-redux";
import "./App.css";
import { HomePage } from "./pages/home/home.page";
import { Layout } from "./ui/Layout";
import { store } from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Layout>
          <HomePage />
        </Layout>
      </Provider>
    </div>
  );
}
export default App;
