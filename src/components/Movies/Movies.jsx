import React, { useEffect, useState } from 'react'
import MovieCard from '../MovieCard';
import Loader from '../Loader';
import { fetchDataFromUrl, fetchMoviesDataFromQuery } from '../../TMDB';
import { useNavigate, useParams } from 'react-router';

function Movies() {
    const {p} = useParams();
    const [searchVal,setSearchVal]=useState('');
    const [isLoading,setIsLoading] = useState(false);
    const [data,setData] = useState([])
    const navigate = useNavigate();
    const fetchData = async()=>{
        setIsLoading(true);
        let res = await fetchDataFromUrl(`https://api.themoviedb.org/3/discover/movie?include_video=false&language=en-US&page=${p}&sort_by=popularity.desc`);
        await setData(res.results);
        window.scrollTo(0,0);
        setIsLoading(false);
    }
    useEffect(() => {
        fetchData();
    }, [p]);
    const handleSearch=async()=>{
        await setIsLoading(true);
        let val = searchVal;
        setSearchVal('');
        let qdata = Array.from(val.split(' '));
        let newdata =await fetchMoviesDataFromQuery(qdata)
        if(newdata.results.length > 0)
            setData(newdata.results);
        setIsLoading(false);
    }

    return (
        <div
            className='p-3 bg-white'
        >
            <div
                className='py-3 px-1 sm:px-4 my-3 mx-auto '
            >
                <div className='bg-gray-200 my-1 py-1 px-1 rounded-lg flex sm:justify-end sm:text-xl sm:py-2 sm:px-4'>
                    <input 
                    type="text" 
                    placeholder='Search Movies'
                    value={searchVal}
                    onKeyDown={(e)=>{
                        if(searchVal.length > 0 && e.key === 'Enter')
                            handleSearch();
                    }}
                    onChange={(e)=>setSearchVal(e.target.value)}
                    className='w-full border-0 py-1 px-3 rounded-s-md outline-0 text-sm sm:max-w-[300px]'
                    />
                    <button 
                    onClick={()=>{
                        if(searchVal.length > 0)
                            handleSearch();
                    }}
                    className='py-1 px-3 bg-blue-500 rounded-e-md text-white active:bg-blue-600 active:scale-[.95]'><i className='fa-solid fa-search'></i></button>
                </div>
                <div className='w-full py-3 px-4 flex justify-between gap-3'>
                    <button
                    onClick={()=>{
                        if(p>1){
                            navigate(`/movies/${p-1}`);
                        }
                    }} 
                    className={` ${p>1?'bg-blue-500 hover:bg-blue-600':'bg-gray-500 hover:bg-gray-600'} py-1 px-2 text-white rounded-full active:scale-[.95] duration-200 min-w-[80px] text-sm justify-self-start`}
                    disabled={p<=1}
                    >Previous</button>
                    <div className='text-xl bg-stone-800 py-2 px-5 rounded-lg text-white text-center'><span className='hidden sm:inline-block'>Current Page :</span> {p}</div>
                    <button
                    onClick={()=>navigate(`/movies/${Number(p)+1}`)} 
                    className='bg-blue-500 py-1 px-2 text-white rounded-full text-sm hover:bg-blue-600 active:scale-[.95] duration-200 justify-self-end min-w-[80px]'>Next</button>
                </div>
                {
                    isLoading ?
                    <div className='flex justify-center items-center max-w-[70px] mx-auto min-h-[80dvh]'>
                        <Loader/>
                    </div>
                    :
                    <div
                        className='py-3 px-1 sm:px-4  flex flex-wrap mx-auto justify-center gap-2 min-h-[80dvh] sm:gap-y-5'
                        >
                        {
                            data && data.map((m,i)=>(
                                <MovieCard key={i} movie={m} type={1} />
                            ))
                        }
                    </div>
                }
                <div className='w-full py-3 px-4 flex justify-between gap-3'>
                    <button
                    onClick={()=>{
                        if(p>1){
                            navigate(`/movies/${p-1}`);
                        }
                    }} 
                    className={` ${p>1?'bg-blue-500 hover:bg-blue-600':'bg-gray-500 hover:bg-gray-600'} py-1 px-2 text-white rounded-full active:scale-[.95] duration-200 min-w-[80px] text-sm justify-self-start`}
                    disabled={p<=1}
                    >Previous</button>
                    <div className='text-xl bg-stone-800 py-2 px-5 rounded-lg text-white text-center'><span className='hidden sm:inline-block'>Current Page :</span> {p}</div>
                    <button
                    onClick={()=>navigate(`/movies/${Number(p)+1}`)} 
                    className='bg-blue-500 py-1 px-2 text-white rounded-full text-sm hover:bg-blue-600 active:scale-[.95] duration-200 justify-self-end min-w-[80px]'>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Movies;