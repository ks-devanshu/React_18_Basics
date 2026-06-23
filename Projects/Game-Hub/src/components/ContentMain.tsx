import { useState } from "react";

const genres:string[] = [
    'mmorpg',' shooter',' strategy',' moba',' racing',' sports',' social',' sandbox',' open-world',' survival',' pvp',' pve',' pixel',' voxel',' zombie',' turn-based',' first-person',' third-Person',' top-down',' tank',' space',' sailing',' side-scroller',' superhero',' permadeath',' card',' battle-royale',' mmo',' mmofps',' mmotps',' 3d',' 2d',' anime',' fantasy',' sci-fi',' fighting',' action-rpg',' action',' military',' martial-arts',' flight',' low-spec',' tower-defense',' horror',' mmorts'
];

const platforms:string[] = [
    'windows', 'browser', 'all'
];

const orderBy:string[] = [
    'release-date', 'popularity', 'alphabetical','relevance'
];

function ContentMain() {

    const [platformDDV, setPlatformDDV] = useState(false);
    const [orderByDDV, setOrderByDDV] = useState(false);

    return (
    <div className="mx-3 md:mx-10 my-5 text-2xl w-full">
        <h1 className="text-5xl md:text-8xl font-bold">Games</h1>
        
        <div className="hidden md:block mt-10 relative">

            <button className="bg-gray-200 mr-5 rounded-xl px-4 py-2 font-bold text-base cursor-pointer" type="button" onMouseEnter={() => setPlatformDDV(true)} onMouseLeave={() => setPlatformDDV(false)} >Platforms <span className="text-2xl">⌄</span>
            </button>
            { platformDDV && <div className="bg-white w-60 rounded-xl border absolute left-0" onMouseEnter={() => setPlatformDDV(true)} onMouseLeave={() => setPlatformDDV(false)}>
                <ul>
                    {platforms.map((platform) => <li className="p-2 hover:bg-blue-200 rounded-xl text-base cursor-pointer" key={platform}>{platform[0].toUpperCase()+platform.slice(1)}</li>)}
                </ul>
            </div>}
           
            <button className="bg-gray-200 mr-5 rounded-xl px-4 py-2 font-bold text-base cursor-pointer" type="button" onMouseEnter={() => setOrderByDDV(true)} onMouseLeave={() => setOrderByDDV(false)}>Order by: Relevance <span 
            className="text-2xl">⌄</span></button>
            {orderByDDV && <div className="bg-white w-60 rounded-xl border absolute left-38" onMouseLeave={() => setOrderByDDV(false)} onMouseEnter={() => setOrderByDDV(true)}>
                <ul>
                    {orderBy.map((order) => <li className="p-2 hover:bg-blue-200 rounded-xl text-base cursor-pointer" key={order}>{order[0].toUpperCase()+order.slice(1)}</li>)}
                </ul>
            </div>}

        </div>

        <div className="flex flex-wrap justify-between">
        {genres.map((genre) => <div key={genre} className="pt-2 px-2 items-center w-40 h-40 lg:w-80 lg:h-80 border flex flex-col rounded-xl mt-5">
            <a className="w-20 h-20 lg:h-40 lg:w-40">
            <img className="" src="public/genre-icons/all-games.png" alt="" />
            </a>
            <div className="max-h-20 lg:max-h-40 flex flex-col grow-1 justify-evenly">
                <h5 className="text-2xl lg:text-5xl font-semibold tracking-tight text-heading">Fortnite</h5>
                <a href="#" className="border border-none w-30 lg:w-60 rounded-xl bg-sky-400 text-white py-1"><span className="text-base my-0 mx-5 max-w-20 lg:max-w-40 lg:mx-20">Exlpore 🢅</span></a>
            </div>
        </div>)}
        </div>

    </div>
    );
}

export default ContentMain;