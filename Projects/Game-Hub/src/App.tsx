import { useEffect, useState } from "react";
import axios from "axios";
import type { Game } from './components/TypeGameData/Game'
import NavigationBar from "./components/NavigationBar/NavigationBar";
import SideBar from "./components/SideBar/Sidebar";
import ContentView from "./components/ContentView/ContentView";
import './App.css'

function App() {

  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    axios.get('https://www.freetogame.com/api/games', {signal:controller.signal})
    .then((res) => {setGames(res.data)})
    .catch( (err) => {setError(err.message)} );

    return () => {controller.abort()};
  }, []);
  
  const [theme, setTheme] = useState(false);
  const switchTheme = () => {
    if (!theme) {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
    }
    else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }

    setTheme(!theme);
  }

  let [selectedGenre, setSelectedGenre] = useState('');
  const genreSelection = (genre:string) => {
    setSelectedGenre(genre);
  };


  return (
    <>
      <NavigationBar switchTheme={switchTheme}></NavigationBar>
      <div className="home-layout">
      <div className="home-layout-sidebar">
      <SideBar onGenreSelection={genreSelection} ></SideBar>
      </div>
      <ContentView games={games}></ContentView>
      </div>
    </>
  )
}

export default App;