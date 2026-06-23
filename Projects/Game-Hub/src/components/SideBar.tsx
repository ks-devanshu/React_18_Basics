

const genres:string[] = [
    'mmorpg',' shooter',' strategy',' moba',' racing',' sports',' social',' sandbox',' open-world',' survival',' pvp',' pve',' pixel',' voxel',' zombie',' turn-based',' first-person',' third-Person',' top-down',' tank',' space',' sailing',' side-scroller',' superhero',' permadeath',' card',' battle-royale',' mmo',' mmofps',' mmotps',' 3d',' 2d',' anime',' fantasy',' sci-fi',' fighting',' action-rpg',' action',' military',' martial-arts',' flight',' low-spec',' tower-defense',' horror',' mmorts'
];

function SideBar() {
    return (
    <div className="hidden lg:block mt-10 ml-5 w-90 dark:text-white">
        <h3 className="text-5xl font-bold">Genres</h3>
        <div className="text-xl m-2 mt-6 max-w-max">
            <ul>
                {genres.sort().map((genre) => <li className="flex items-center my-3" key={genre}><img src="public/genre-icons/all-games.png" alt="genre-icon" className="max-w-10 max-h-10 border-solid rounded-xl border-black border-2 p-1 cursor-pointer" /><button type="button" className="pl-5 cursor-pointer hover:underline">{genre.toUpperCase()}</button></li>)}
            </ul>
        </div>
    </div>
    );
}

export default SideBar;