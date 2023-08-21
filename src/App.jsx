import { useState } from "react"
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import ForgotPassword from "./components/ForgotPassword"
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"
import CreateIssue from "./components/CreateIssue"
import MyIssues from "./components/MyIssues"

function App() {
  const [stateForLogo, setStateForLogo] = useState(true)
  const [languageClicked, setLanguageClicked] = useState(false)

  setTimeout(() => {
    setStateForLogo(false)
  }, 1000)

  return (
    <>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Login
              stateForLogo={stateForLogo}
              languageClicked={languageClicked}
              setLanguageClicked={setLanguageClicked}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              languageClicked={languageClicked}
              setLanguageClicked={setLanguageClicked}
            />
          }
        />
        <Route
          path="/forgotPassword"
          element={
            <ForgotPassword
              languageClicked={languageClicked}
              setLanguageClicked={setLanguageClicked}
            />
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createIssue" element={<CreateIssue />} />
        <Route path="/myIssues" element={<MyIssues />} />
      </Routes>
    </>
  )
}

export default App
