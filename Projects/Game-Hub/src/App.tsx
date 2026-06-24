import './App.css'
import NavigationBar from './components/NavigationBar';
import SideBar from './components/SideBar';
import ContentMain from './components/ContentMain';
import { useEffect, useState } from 'react';
import clientService, {CanceledError} from './services/clientService';
import type { Game } from './services/clientService';
import LoadingCard from './components/LoadingCard';

function App() {
  const [theme, setTheme] = useState('light');
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState('Games');
  const [visibleGames, setVisibleGames] = useState<Game[]>([]);

  const searchMatching = (term:string) => {
    setVisibleGames(games.filter( (game) => game.title.toLowerCase().includes(term.toLowerCase()) ))
  }
  
  const filterGenre = (genre:string) => {
    setIsLoading(true);
    clientService.selectGenre(genre)
    .then( (res) => {
      setVisibleGames(res.data);
      setIsLoading(false);
    } )
    .catch( (err) => setError(err.message) );
    setTitle(genre);
  }

  const filterPlatform = (platform:string) => {
    setIsLoading(true);
    clientService.filterPlatform(platform)
    .then( (res) => {setVisibleGames(res.data);
      setIsLoading(false);
    } )
    .catch( (err) => setError(err.message) );
  };

  const arrangeInOrder = (order:string) => {
    setIsLoading(true);
    clientService.arrangeInOrder(order)
    .then( (res) => {setVisibleGames(res.data); setIsLoading(false)} )
    .catch( (err) => setError(err.message) );
  };

  useEffect( () => {
    setIsLoading(true);
    const {response, abort} = clientService.getAll();
    response
    .then( (res) => { 
      setGames(res.data);
      setVisibleGames(res.data);
      setIsLoading(false);
    } )
    .catch((err) => {
      setIsLoading(false);
      if (err instanceof CanceledError)
        return;
      setError(err.message);
    });

    return () => { abort() }
  }, [] )

  console.log(error);

  return (
    <>
    <div data-theme={theme} className='dark:bg-gray-800 bg-mist-50'>
    <NavigationBar onSearch={ searchMatching } onThemeToggle={() => setTheme( theme === 'light' ? 'dark' : 'light') }></NavigationBar>
    <div className='flex'>
    <SideBar onGenreSelect={filterGenre}></SideBar>
    {isLoading ? <LoadingCard></LoadingCard> : <ContentMain title={title} games={visibleGames} onPlatform={filterPlatform} onArrange={arrangeInOrder}></ContentMain>}
    </div>
  </div>
  </>
  )
}

export default App;