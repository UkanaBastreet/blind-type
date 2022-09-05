import { useState } from "react"
import { Route, Routes, useParams } from "react-router-dom"
import { LessonsPage } from "./Pages/LessonsPage/LessonsPage"
import { HomePage } from "./Pages/HomePage/HomePage"
import { TrainingPage } from "./Pages/TrainingPage/TrainingPage"
import { Layout } from "./Components/Layout/Layout"
import { useReducer } from "react"
import { rootReducer } from "./Redux/rootReducer"
import { initialState } from "./Redux/InitialState"

const App = () => {
  const [theme, setTheme] = useState(false)
  const [state, dispatch] = useReducer(rootReducer, initialState)
  const [language, setLanguage] = useState("ENG")

  return (
    <div className={"App " + (theme ? "white-theme" : "dark-theme")}>
      <Layout
        theme={theme}
        setTheme={setTheme}
        language={language}
        setLanguage={() => setLanguage(language === "ENG" ? "RUS" : "ENG")}
      >
        <div className="content">
          <Routes>
            <Route path="/blind-type" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route
              path="lessons"
              element={<LessonsPage lessons={state.lessons} />}
            />
            <Route
              path="lessons/:id"
              element={
                <TrainingPage
                  lessons={state.lessons[language]}
                  dispatch={dispatch}
                  language={language}
                />
              }
            />
          </Routes>
        </div>
      </Layout>
    </div>
  )
}

export default App
