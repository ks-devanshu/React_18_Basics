import { CiSearch } from "react-icons/ci";
import './NavigationBar.css'

interface NavigationBarProps {
    switchTheme: () => void
}

function NavigationBar( {switchTheme} : NavigationBarProps ) {
    return (
        <div className='navigation-bar'>
            <img className='icon' src="/icon.webp" alt="icon" />

            <div className="search-container">
                <div className="search-icon-div"><CiSearch className='search-icon'></CiSearch></div><input id='search-box' placeholder='Search games...' type="text" className="search-field" />
            </div>
            
            <div className="form-switch">
                <input type="checkbox" onChange={switchTheme} className='form-check-input theme-switch theme-switch-input' id="theme-selector" />
                <label className='form-check-label theme-label theme-switch' htmlFor="theme-selector">Dark Mode</label>
            </div>
        </div>
    )
}

export default NavigationBar;