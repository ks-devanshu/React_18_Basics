import { useState } from "react";
import { platforms ,orderBy } from "../services/dataPrint";
import type { Game } from "../services/clientService";


interface ContentMainProps {
    title: string,
    games: Game[],
    onPlatform: (platform:string) => void,
    onArrange: (order:string) => void
}

function ContentMain( {title, games, onPlatform, onArrange} : ContentMainProps ) {

    const [platformDDV, setPlatformDDV] = useState(false);
    const [orderByDDV, setOrderByDDV] = useState(false);

    return (
    <div className="mx-3 md:mx-10 my-5 text-2xl w-full">
        <h1 className="text-5xl md:text-8xl font-bold dark:text-white">{title.toUpperCase()}</h1>
        
        <div className="hidden md:block mt-10 relative">

            <button className="bg-gray-200 mr-5 rounded-xl px-4 py-2 font-bold text-base cursor-pointer" type="button" onMouseEnter={() => setPlatformDDV(true)} onMouseLeave={() => setPlatformDDV(false)} >Platforms <span className="text-2xl">⌄</span>
            </button>
            { platformDDV && <div className="bg-mist-100 w-60 rounded-xl border absolute left-0" onMouseEnter={() => setPlatformDDV(true)} onMouseLeave={() => setPlatformDDV(false)} onClick={() => setPlatformDDV(false)}>
                <ul>
                    {platforms.map((platform) => <li className="p-2 hover:bg-blue-200 rounded-xl text-base cursor-pointer" onClick={() => onPlatform(platform)} key={platform}>{platform[0].toUpperCase()+platform.slice(1)}</li>)}
                </ul>
            </div>}
           
            <button className="bg-gray-200 mr-5 rounded-xl px-4 py-2 font-bold text-base cursor-pointer" type="button" onMouseEnter={() => setOrderByDDV(true)} onMouseLeave={() => setOrderByDDV(false)}>Order by: <span 
            className="text-2xl">⌄</span></button>
            {orderByDDV && <div className="bg-mist-100 w-60 rounded-xl border absolute left-38" onMouseLeave={() => setOrderByDDV(false)} onMouseEnter={() => setOrderByDDV(true)} onClick={() => setOrderByDDV(false)}>
                <ul>
                    {orderBy.map((order) => <li className="p-2 hover:bg-blue-200 rounded-xl text-base cursor-pointer" onClick={() => onArrange(order)} key={order}>{order[0].toUpperCase()+order.slice(1)}</li>)}
                </ul>
            </div>}

        </div>

        <div className="flex flex-wrap justify-between">
        {games.map((game) => <div key={game.id} className="py-2 px-2 items-center w-40 h-max lg:w-80 lg:h-80 border flex flex-col rounded-xl mt-5 bg-white dark:bg-gray-600">
            <img className="w-20 h-20 lg:h-40 rounded-xl lg:w-full" src={game.thumbnail} alt="game-thumbnail" />
            <div className="max-h-min lg:max-h-40 flex flex-col grow-1 justify-evenly items-center">
                <h2 className="dark:text-mist-100 text-sm md:text-xl font-semibold tracking-tight px-5">{game.title}</h2>
                <a className="border border-none w-30 lg:w-60 rounded-xl bg-gray-800 text-white hover:bg-gray-300 hover:text-black py-1" target="_blank" href={game.freetogame_profile_url}><span className="text-base my-0 mx-5 max-w-20 lg:max-w-40 lg:mx-20">Exlpore 🢅</span></a>
            </div>
        </div>)}
        </div>

    </div>
    );
}

export default ContentMain;