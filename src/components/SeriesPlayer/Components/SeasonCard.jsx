import React from 'react'
import { useNavigate } from 'react-router';

function SeasonCard({season ,seasonCount, seriesId}) {

    const episodes = Array.from({length:season.episode_count},(_,index)=>index+1);
    const navigate = useNavigate();

    const handelMigration=(url)=>{
        window.moveTo(0,0);
        navigate("/tv-pl/"+url);
    }
    
    return (
        <div>
            <div
                className='bg-gray-200 w-[250px] mx-auto min-h-[300px] my-2 rounded-lg p-2 border-gray-400 border-2'
            >
                <img
                    src={season.poster_path?"https://image.tmdb.org/t/p/w300/"+season.poster_path:"https://via.placeholder.com/250x380"}
                    alt="Season 1"
                    className='w-[240px] mx-auto'
                />
                <details
                    className='p-2 outline-0 border-0'
                >
                    <summary
                        className='font-bold text-lg cursor-pointer hover:text-orange-700'
                    >{season.name}</summary>
                    <ul
                        className='p-2 list-none text-center w-full'
                    >
                    {
                        episodes.map(ep=>(
                            <li
                            key={seriesId+'/'+seasonCount+'/'+ep}
                            onClick={()=>handelMigration(seriesId+'/'+seasonCount+'/'+ep)}
                            id={seriesId+'/'+seasonCount+'/'+ep }
                            className='hover:bg-orange-200 cursor-pointer hover:underline'
                            >Episode {ep}</li>
                        ))
                    }
                    </ul>
                </details>
            </div>
        </div>
    )
}

export default SeasonCard