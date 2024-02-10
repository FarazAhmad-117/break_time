import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { SeasonCard } from './Components';
import { fetchSeasonDataById } from '../../TMDB';

function SeriesPage() {
    const { seriesId } = useParams();
    const [data,setData] = useState(null);
    const [seasons,setSeasons] = useState(null);

    useEffect(()=>{
        const fetchData = async()=>{ 
            const resData =await fetchSeasonDataById(seriesId);
            await setData(resData);
            await setSeasons(Array.from(resData.seasons));
        }
        fetchData();
    },[seriesId]);

    return (
        <div
            className='w-full py-5 mx-auto px-7 block md:flex md:gap-1'
        >
            <div
                className='py-5 mx-auto mt-2 px-3 md:flex-1 border-gray-100'
            >
                <div
                    className=''
                >
                    <div
                        className='bg-white'
                    >
                        <img
                            className='w-full mx-auto max-w-[500px]'
                            src={data?'https://image.tmdb.org/t/p/w500'+data.poster_path : ''}
                            alt={data?data.name:"Image Thumbnail"}
                        />
                    </div>
                    <div
                        className=''
                    >
                        <h1
                            className='text-3xl bg-teal-900 text-white md:rounded-full text-center py-2'
                        >{data ?data.name: "Season Name"}</h1>
                        <p
                            className='text-md bg-teal-100 py-2 px-3 md:rounded-2xl md:border-[2px] border-teal-400'
                        >{data ? data.overview: "Season Overview"}</p>
                        <p
                            className='px-3 font-bold'
                        >Release Date : {data?data.first_air_date:"Date of release"}</p>
                        <div
                        className='p-2 bg-amber-900 md:rounded-md text-white w-full flex flex-wrap gap-2 justify-center'
                        >
                        {
                            data && Array.from(data.genres).map((g)=>(
                                <div
                                id={g.id}
                                key={g.id}
                                className='py-1 bg-emerald-600 rounded-full px-2 border-2 hover:bg-emerald-700 cursor-pointer'
                                >{g.name}</div>
                            ))
                        }                       
                        </div>
                    </div>
                </div>
                <div
                    className='bg-white'
                >
                    <div
                        className='bg-gray-50 px-5 py-4'
                    >
                        <p>Total Seasons : <span className='text-lg text-stone-500' >{data?data.number_of_seasons:0}</span></p>
                        <p>Total Episodes : <span className='text-lg text-stone-500' >{data?data.number_of_episodes:0}</span></p>
                    </div>
                    <div
                        className='bg-gray-50 my-3 mx-2 py-2 flex flex-wrap justify-center align-middle gap-3'
                    >
                    {
                        seasons && seasons.map((s,i)=>(
                            <SeasonCard key={i*Math.random()} season={s} seasonCount={s.season_number} seriesId={data?data.id:0} />
                        ))
                    }
                    </div>
                </div>
            </div>
            <aside
                className='py-3 px-2 bg-white mt-2 min-w-[280px] border-2 border-gray-200'
            >Aside Section for recomendations</aside>
        </div>
    )
}

export default SeriesPage;

