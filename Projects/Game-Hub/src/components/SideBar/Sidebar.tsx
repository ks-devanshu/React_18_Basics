import './Sidebar.css'

type genre = {
  id: number,
  label: string,
  src: string
}

interface SideBarProps {
    genres: genre[],
    onSelection: (id:number) => void
}

function SideBar({genres, onSelection} : SideBarProps) {
    return (
        <div className="side-bar">
            <h3 className="heading-sidebar">Genres</h3>
            <ul className="genre-list">
            {genres.map( (each) => <li key={each.id} className="genre-list-item" onClick={()=> {onSelection(each.id)}} ><img className='genre-list-icon' src={each.src} alt={each.label} /><a className='genre-list-item-a'>{each.label}</a></li> )}
            </ul>
        </div>
    )
}

export default SideBar;