import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { fetchMovieDataByID } from '../../TMDB';
import Loader from '../Loader';

function MoviePage() {
    const { movieId } = useParams()
    const [data,setData] = useState(null);
    useEffect(()=>{
        const fetchData = async()=>{ 
            const resData =await fetchMovieDataByID(movieId);
            await setData(resData);
        }
        fetchData();
    },[movieId]);
    const navigate = useNavigate();
    const handleMigration = (id)=>{
        navigate("/mv-pl/"+id);
    }

    return (
        <div
            className='w-full py-5 mx-auto px-7 block md:flex md:gap-1 min-h-[50vh]'
        >
            {data ? <div
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
                            alt={data?data.original_title:"Movie Image"}
                        />
                    </div>
                    <div
                        className=''
                    >
                        <h1
                            className='text-3xl bg-teal-900 text-white md:rounded-full text-center py-2'
                        >{data ? data.original_title: "Movie Name"}</h1>
                        <p
                            className='text-md bg-teal-100 py-2 px-3 md:rounded-2xl md:border-[2px] border-teal-400'
                        >{data ? data.overview: "Season Overview"}</p>
                        <p
                            className='px-3 font-bold'
                        >Release Date : {data?data.release_date:"Date of release"}</p>
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
                        <div
                        className='py-4 my-3 flex justify-center items-center'
                        >
                            <button
                            className='text-xl font-serif text-white bg-slate-800 py-3 px-5 rounded-full hover:bg-slate-700 active:scale-[.95] duration-200'
                            onClick={()=>{window.moveTo(0,0);handleMigration(data.id);}}
                            >Play Now</button>
                        </div>
                    </div>
                </div>
            </div> : <Loader/>}
            <aside
                className='py-3 px-2 bg-white mt-2 min-w-[280px] border-2 border-gray-200'
            >Aside Section for recomendations</aside>
        </div>
    )
}

export default MoviePage;