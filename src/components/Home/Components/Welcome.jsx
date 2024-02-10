import React from 'react'
import { Link } from 'react-router-dom'

function Welcome() {
    return (
    <div className="bg-white py-16 px-4 md:px-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
            {/* Left side with hero image and description */}
            <div className="md:w-1/2 mb-8 md:mb-0 sm:pl-6">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">Welcome to <span className='text-6xl py-4 text-orange-950'>Break <span className='text-orange-700'>Time</span></span></h1>
                <p className="text-lg md:text-xl leading-relaxed mb-6">Stream free movies and web series online anytime, anywhere.</p>
                <Link to="movies" className="bg-orange-700 text-white font-bold py-2 px-4 rounded hover:bg-orange-600 transition duration-300">Explore Now</Link>
            </div>
            {/* Right side with hot thumbnails */}
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
                {/* Hot Movie/Show 1 */}
                <div className="relative group">
                    <Link to="tv">
                        <img 
                        src="https://assets-prd.ignimgs.com/2022/01/14/gameofthrones-allseasons-sq-1642120207458.jpg" 
                        alt="GOT" 
                        className="rounded-lg w-full h-auto max-h-[310px]" />
                        <div 
                        className="absolute bottom-0 left-0 bg-gray-800 bg-opacity-75 w-full rounded-lg py-2 px-4 text-sm"
                        style={{'userSelect':'none'}}
                        >
                            <p className="text-white">Games of Thrones</p>
                        </div>
                    </Link>
                </div>
                {/* Hot Movie/Show 2 */}
                <div className="relative group">
                    <Link to="movies" >
                        <img 
                        src="https://theempiretheatre.com/uploads/2023/09/Empire-Movie-site-Oppenheimer.jpg" 
                        alt="Open Hiemer" 
                        className="rounded-lg w-full h-auto max-h-[310px]" />
                        <div 
                        className="absolute bottom-0 left-0 bg-gray-800 bg-opacity-75 w-full rounded-lg py-2 px-4 text-sm"
                        style={{'userSelect':'none'}}
                        >
                            <p className="text-white">Open Heimer</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Welcome