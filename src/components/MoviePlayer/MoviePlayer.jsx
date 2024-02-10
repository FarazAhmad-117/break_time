import React, { useEffect } from 'react'
import { useParams } from 'react-router'

function MoviePlayer() {
    const {movieId} = useParams();
    useEffect(()=>{
        window.moveTo(0,0);
    },[])
    return (
        <div
        className='py-4 px-1 sm:px-6'
        >
            <div
            className='w-full min-h-[30dvh] sm:min-h-[70dvh]'
            allowFullScreen
            >
            <iframe 
            src={'https://vidsrc.to/embed/movie/'+movieId}
            className='min-h-[30dvh] sm:min-h-[80dvh] mx-auto'
            width={'95%'} 
            frameBorder="0"
            allowFullScreen
            ></iframe>
            </div>
        </div>
    )
}

export default MoviePlayer