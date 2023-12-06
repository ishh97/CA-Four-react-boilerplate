import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import ToggleTheme from "./components/Theme";


export const ChangeTheme = React.createContext()
export const ResultContext = React.createContext()

function App() {

  const [dark, setTheme] = useState(false);
  const [result, setResult] = useState(0);


  const themeStyle = {
    backgroundColor: dark ? 'black' : 'pink',
    color: dark ? 'pink' : 'black'
  }
  const changeTheme = () => {
    setTheme(!dark)
    // setThemeName(!themeName)
  }



  return (
    <div style={themeStyle} className="mainBody">

      <ChangeTheme.Provider value={changeTheme}>
        <ResultContext.Provider value={result}>
          <ToggleTheme />
          <p className="description">Welcome To Quiz App , Test your React Knowldege with us.</p>
          <QuestionBox setResult={setResult} />
        </ResultContext.Provider>

      </ChangeTheme.Provider>
    </div>
  );
}

export default App;