import { useRef } from "react";

interface NavigationBarProps {
    onSearch: (term:string) => void,
    onThemeToggle: () => void
}

function NavigationBar( { onSearch, onThemeToggle} : NavigationBarProps ) {
    const searchRef = useRef<HTMLInputElement>(null);

    return (
        <div className="flex justify-between items-center m-2 mt-0 pt-2 text-gray-500 dark:text-white">
            <a href=""><img className="rounded-full w-10 h-10 md:w-15 md:h-15 mx-1 cursor-pointer" src="/icon.webp" alt="icon-home" /></a>

            <div className="h-8 md:h-13 w-50 md:w-300 rounded-full flex items-center px-1 md:px-3 mx-6 bg-gray-300 grow-1 dark:bg-gray-600">
            <label className="text-l md:text-xl px-0 py-0 mx-0 my-0" htmlFor="search-bar">&#128269;</label>
            <input className="text-l md:text-xl h-8 md:h-13 max-w-37 md:max-w-full max-h-full border-none bg-gray-300 dark:bg-gray-600 rounded-full ml-4 flex-1 focus:border-transparent focus:ring-0 dark:placeholder-white placeholder-gray-600" type="search" placeholder="Search games..." id="search-bar" ref={searchRef} onChange={() => { 
                if (searchRef.current?.value)
                    onSearch(searchRef.current?.value);
             }} />
            </div>

            <div className="ml-1 mr-2 md:mr-6 shrink-0">
                <label htmlFor="theme-toggle" className="flex items-center cursor-pointer relative">
                    <input type="checkbox" id="theme-toggle" className="sr-only" onChange={onThemeToggle}/>
                    <div className="toggle-bg bg-gray-100 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
                    <span className="hidden md:inline ml-3 text-l md:text-xl font-medium">Dark Theme</span>
                </label>
            </div>

        </div>
    )
}

export default NavigationBar;