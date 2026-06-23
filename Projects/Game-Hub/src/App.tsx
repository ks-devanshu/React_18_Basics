import './App.css'
import NavigationBar from './components/NavigationBar';
import SideBar from './components/SideBar';
import ContentMain from './components/ContentMain';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [theme, setTheme] = useState('light');

  return (
  <div data-theme={theme} className='dark:bg-gray-800'>
    <NavigationBar onSearch={ (term) => setSearchTerm(term) } onThemeToggle={() => setTheme( theme === 'light' ? 'dark' : 'light') }></NavigationBar>
    <div className='flex'>
    <SideBar></SideBar>
    <ContentMain></ContentMain>
    </div>
  </div>
  )
}

export default App;