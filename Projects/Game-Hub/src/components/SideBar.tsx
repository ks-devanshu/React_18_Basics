import { genres } from "../services/dataPrint";

interface SideBarProps {
    onGenreSelect: (genre:string) => void;
}

function SideBar( {onGenreSelect} : SideBarProps ) {
    return (
    <div className="hidden lg:block mt-10 ml-5 w-90 dark:text-white">
        <h3 className="text-5xl font-bold">Genres</h3>
        <div className="text-xl m-2 mt-6 max-w-max">
            <ul>
                {genres.sort().map((genre) => <li className="flex items-center my-3" key={genre}><img src="/genre-icons/generic.png" alt="genre-icon" className="max-w-10 max-h-10 border-solid rounded-xl p-1 cursor-pointer" /><button type="button" className="pl-5 cursor-pointer hover:underline" onClick={() => {onGenreSelect(genre)}}>{genre.toUpperCase()}</button></li>)}
            </ul>
        </div>
    </div>
    );
}

export default SideBar;