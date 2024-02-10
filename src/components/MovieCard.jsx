import React, { useEffect } from 'react'
import { imageUrl } from '../TMDB'
import { useNavigate } from 'react-router'

function MovieCard({movie, type}) {
    
    let navigate = useNavigate();

    const handelClick = ()=>{
        let url = type===1 ? "/mplay/":"/tvplay/";
        url += movie.id;
        window.moveTo(0,0);
        navigate(url);
    }

    return (
        <div 
        id={movie.id}  
        className="min-w-[138px] min-h-[200px] w-[138px] h-[300px] sm:min-w-[250px] sm:min-h-[350px] sm:my-2 my-4" 
        >
            <div 
            onClick={handelClick}
            className="bg-gray-800 cursor-pointer rounded-lg overflow-hidden shadow-xl"
            >
                <img 
                src={imageUrl+movie.poster_path} 
                alt={type===1 ?movie.title : movie.original_name} 
                className="w-full h-44 sm:h-64 object-cover" 
                />
                <div className="p-4">
                    <h3 className="text-white text-sm sm:text-xl font-semibold mb-2 text-ellipsis">{type===1 ?movie.title : movie.original_name}</h3>
                    <p className="text-gray-400 text-sm">{type===1 ? movie.release_date : `Ratings: ${movie.vote_average}`}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieCard