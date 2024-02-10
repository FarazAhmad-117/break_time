import React, { useEffect } from 'react'
import { useParams } from 'react-router'

function SeriesPlayer() {
    const {seasonId,seasonNum,episodeNum} = useParams();
    return (
        <div
        className='py-4 px-1 sm:px-6'
        >
            <div
            className='w-full min-h-[30dvh] sm:min-h-[70dvh]'
            allowFullScreen
            >
            <iframe 
            src={'https://vidsrc.to/embed/tv/'+seasonId+'/'+seasonNum+'/'+episodeNum}
            className='min-h-[30dvh] sm:min-h-[80dvh] mx-auto'
            width={'95%'} 
            frameborder="0"
            allowFullScreen
            ></iframe>
            </div>
        </div>
    )
}

export default SeriesPlayer;