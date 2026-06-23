import './App.css'
import NavigationBar from './components/NavigationBar';
import SideBar from './components/SideBar';
import ContentMain from './components/ContentMain';

function App() {
  return (
  <div>
    <NavigationBar></NavigationBar>
    <div className='flex'>
    <SideBar></SideBar>
    <ContentMain></ContentMain>
    </div>
  </div>
  )
}

export default App;