
function LoadingCard() {
    const temp = ['','',''];
    return (
        <div className="flex flex-wrap justify-between mt-70">
        {
            temp.map ( (each, index) => <div key={index} className="py-2 px-2 w-40 h-max lg:w-80 lg:h-80 border flex flex-col rounded-xl mt-0 bg-mist-300 dark:bg-gray-600 m-5">
            <img className="w-20 h-20 lg:h-40 rounded-xl lg:w-full" />
            <div className="max-h-min lg:max-h-40 flex flex-col grow-1 justify-evenly items-center">
                <h2 className="dark:text-mist-100 text-sm md:text-xl font-semibold tracking-tight px-5"></h2>
                <a className="border border-none w-30 lg:w-60 rounded-xl bg-mist-400 text-white py-1" target="_blank"><span className="text-base my-0 mx-5 max-w-20 lg:max-w-40 lg:mx-20"></span></a>
            </div>
        </div> )
        }
        
        </div>
    )
}

export default LoadingCard;