import { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { LessonsPage } from "./Pages/LessonsPage/LessonsPage";
import { HomePage } from "./Pages/HomePage";
import { TrainingPage } from "./Pages/TrainingPage/TrainingPage";
import { Layout } from "./Components/Layout";
import { useReducer } from "react";
import { rootReducer } from "./Redux/rootReducer";
import { BrowserRouter } from "react-router-dom";
import { initialState } from "./Redux/InitialState";

const App = () => {
  const [theme, setTheme] = useState(true);
  const [state, dispatch] = useReducer(rootReducer, initialState);
  // const [language, setLanguage] = useState("ENG");

  return (
    <BrowserRouter>
      <div className={"App " + (theme ? "white-theme" : "dark-theme")}>
        <Layout theme={theme} setTheme={setTheme}>
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="lessons"
                element={<LessonsPage lessons={state.lessons} />}
              />
              <Route
                path="lessons/:id"
                element={
                  <TrainingPage
                    dispatch={dispatch}
                    lessons={state.lessons}
                    // value={state?.lessons[language][id]}
                  />
                }
              />
            </Routes>
          </div>
        </Layout>
      </div>
    </BrowserRouter>
  );
};

export default App;
