import { useState } from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";


function App() {
  let [theme, setTheme] = useState(false);

  const switchTheme = () => {
    document.body.style.background = theme ? "white" : "rgba(34, 33, 33, 0.94)";
    document.body.style.color = theme ? "black" : "white";
    setTheme(!theme);
  }

  return (
    <>
    <NavigationBar theme={theme} switchTheme={switchTheme}></NavigationBar>
    </>
  )
}

export default App;