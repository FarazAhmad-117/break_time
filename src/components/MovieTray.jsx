import React,{ useEffect, useState } from 'react'
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import MovieCard from './MovieCard'; // Assuming MovieCard is a component to display individual movie cards
import "./Styles/MovieTray.css";
import Loader from './Loader';
import { useNavigate } from 'react-router';

function MovieTray({title,movies, type}) {
    let navigate = useNavigate();
    return (
    <div className="bg-gray-200 py-8">
        <div className="container mx-auto">
            <h2 className="text-2xl font-semibold sm:rounded-full text-white mb-4 bg-stone-700 py-2 px-7" 
            onClick={()=>{
                if(type===1){
                    navigate("/movies/1");
                }else{
                    navigate("/tv/1");
                }
            }}
            >{title} {">>"} </h2>
            <div className="px-3 tray-wrapper gap-2 pb-15 h-full sm:min-h-[450px]">
                {movies ? movies.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie} type = {type}/>
                }) : 
                <div className='flex justify-center items-center max-w-[70px] mx-auto sm:min-h-[450px]'>
                    <Loader/>
                </div>
                }
            </div>
        </div>
    </div>
    )
}

export default MovieTray



