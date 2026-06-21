import './ContentView.css'
import type { Game } from './../TypeGameData/Game';
import { platforms, orderBy } from './../TypeGameData/Game';

interface ContentViewProps {
    games: Game[]
}

function ContentView({games}: ContentViewProps) {
    return (
        <>
        <div className="content-view-heading-dropdown">
            <h1 className='heading-content'>Games</h1>

            <div className="dropdown dropdown-filter">
            <button className="btn dropdown-toggle dropdown-filter-platform" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Platforms
            </button>
            <ul className="dropdown-menu">
                {platforms.map((platform) => <li key={platform}><button className="dropdown-item" >{platform[0].toUpperCase()+platform.slice(1)}</button></li>)}
            </ul>

            <button className="btn dropdown-toggle dropdown-filter-order" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Order by: Relevance
            </button>
            <ul className="dropdown-menu">
                {orderBy.map((order) => <li key={order}><button className="dropdown-item">{order[0].toUpperCase()+order.slice(1)}</button></li>)}
            </ul>
            </div>
            <div className='content-view-games'>
                {games.map( (game) => 
                <div key={game.id} className="card card-style">
                <img src={game.thumbnail} alt={game.title} className="card-img-top card-img-style" />
                <div className='content-view-games-desc'>
                    <h5 className="card-title card-title-style">{game.title}</h5>
                    <a href={game.game_url} className="btn btn-primary card-btn-style">See on freetogame.com <span>&#128279;</span></a>
                </div>
                </div> )}
            </div>
        </div>

        </>
    );
}

export default ContentView;