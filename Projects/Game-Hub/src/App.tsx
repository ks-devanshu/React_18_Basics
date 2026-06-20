import { useState } from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import SideBar from "./components/SideBar/Sidebar";
import './App.css'

type genre = {
  id: number,
  label: string,
  src: string
}

const genres:genre[] = [
  { id:1, label:'Action',src:'public/genre-icons/action.png'},
  { id:2, label:'Adventure',src:'public/genre-icons/adventure.png'},
  { id:3, label:'Android',src:'public/genre-icons/android.png'},
  { id:4, label:'Anime',src:'public/genre-icons/anime.png'},
  { id:5, label:'Classics',src:'public/genre-icons/classics.png'},
  { id:6, label:'Emulators',src:'public/genre-icons/emulators.png'},
  { id:7, label:'Fighting',src:'public/genre-icons/fighting.png'},
  { id:8, label:'Flight',src:'public/genre-icons/flight.png'},
  { id:9, label:'FPS',src:'public/genre-icons/fps.png'},
  { id:10, label:'Horror',src:'public/genre-icons/horror.png'},
  { id:11, label:'Hypervisor',src:'public/genre-icons/hypervisor.png'},
  { id:12, label:'Indie',src:'public/genre-icons/indie.png'},
  { id:13, label:'Open World',src:'public/genre-icons/openworld.png'},
  { id:14, label:'Racing',src:'public/genre-icons/racing.png'},
  { id:15, label:'RPG',src:'public/genre-icons/rpg.png'},
  { id:16, label:'Simulation',src:'public/genre-icons/simulation.png'},
  { id:17, label:'Sports',src:'public/genre-icons/sports.png'},
  { id:18, label:'Strategy',src:'public/genre-icons/strategy.png'},
  { id:19, label:'Survival',src:'public/genre-icons/survival.png'},
];

function App() {
  
  let [theme, setTheme] = useState(false);
  const switchTheme = () => {
    document.body.style.background = theme ? "white" : "rgba(34, 33, 33, 0.94)";
    document.body.style.color = theme ? "black" : "white";
    setTheme(!theme);
  }

  let [selectedGenre, setSelectedGenre] = useState(0);
  const changeSelection = (id:number) => {
    setSelectedGenre(id);
  };


  return (
    <>
    <NavigationBar theme={theme} switchTheme={switchTheme}></NavigationBar>
    <SideBar genres={genres} onSelection={changeSelection} ></SideBar>
    </>
  )
}

export default App;