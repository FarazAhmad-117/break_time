import React, { useEffect, useState } from 'react'
import Welcome from './Components/Welcome'
import MovieTray from '../MovieTray';
import { fetchTrendingMovies, fetchTrendingWebSeries } from '../../TMDB';

function Home() {

    const [movieData,setMovieData] = useState({});
    const [seriesData,setSeriesData] = useState({});
    const getTrending = async()=>{
        let data = await fetchTrendingMovies(1);
        let data2 = await fetchTrendingWebSeries(1);
        await setMovieData(data);
        await setSeriesData(data2);
    }
    useEffect(()=>{
        getTrending();
    },[]);

    return (
        <div className='w-full py-5'>
            {/* Top Intro Section */}
            <Welcome />
            {/* Popular Movies Tray */}
            <MovieTray title="Latest Movies" movies={movieData.results} type={1} />
            {/* Popular Web Series Tray */}
            <MovieTray title="Latest TV Shows" movies={seriesData.results} type={2} />
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mt-10">
                        <img
                            className="mx-auto h-48 sm:h-64 md:h-96 lg:h-auto"
                            src="https://t3.ftcdn.net/jpg/02/46/62/00/360_F_246620073_IAucPtjf5BpH75fyZ4ZquOkOUzPz6NDE.jpg"
                            alt="Ending Image"
                        />
                    </div>
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            The End
                        </h2>
                        <p className="mt-4 text-lg text-gray-500">
                            Thanks for visiting our website!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;