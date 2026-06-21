import './Sidebar.css'
import { genres } from '../TypeGameData/Game'

interface SideBarProps {
    onGenreSelection: (genre:string) => void
}

function SideBar({onGenreSelection} : SideBarProps) {
    return (
        <div className="side-bar">
            <h3 className="heading-sidebar">Genres</h3>
            <ul className="genre-list">
            {genres.sort().map( (genre) => <li key={genre} className="genre-list-item" onClick={()=> {onGenreSelection(genre)}} ><img className='genre-list-icon' src='public/genre-icons/all-games.png' alt={genre} /><a className='genre-list-item-a'>{genre[0].toUpperCase()+genre.slice(1)}</a></li> )}
            </ul>
        </div>
    )
}

export default SideBar;