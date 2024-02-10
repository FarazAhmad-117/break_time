import React, { useEffect, useState } from 'react'
import MovieCard from '../MovieCard';
import Loader from '../Loader';
import { fetchDataFromUrl, fetchMoviesDataFromQuery } from '../../TMDB';

function Movies() {
    const [page, setPage] = useState(1);
    const [searchVal,setSearchVal]=useState('');
    const [data,setData] = useState([])
    const fetchData = async()=>{
        let res = await fetchDataFromUrl(`https://api.themoviedb.org/3/discover/movie?include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`);
        await setData(res.results);
        window.scrollTo(0,0);
    }
    useEffect(() => {
        fetchData();
    }, [page]);
    const handleSearch=async()=>{
        let val = searchVal;
        setSearchVal('');
        let qdata = Array.from(val.split(' '));
        let newdata =await fetchMoviesDataFromQuery(qdata)
        if(newdata.results.length > 0)
            setData(newdata.results);
    }

    return (
        <div
            className='p-3 bg-white'
        >
            <div
                className='py-3 px-4 my-3 mx-auto '
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
                        if(page>1){
                            setPage(prev=>prev-1);
                        }
                    }} 
                    className={` ${page>1?'bg-blue-500 hover:bg-blue-600':'bg-gray-500 hover:bg-gray-600'} py-1 px-2 text-white rounded-full active:scale-[.95] duration-200 text-sm justify-self-start`}
                    disabled={page<=1}
                    >Previous Page</button>
                    <div className='text-xl bg-stone-800 py-2 px-5 rounded-lg text-white text-center'><span className='hidden sm:inline-block'>Current Page :</span> {page}</div>
                    <button
                    onClick={()=>setPage(prev=>prev+1)} 
                    className='bg-blue-500 py-1 px-2 text-white rounded-full text-sm hover:bg-blue-600 active:scale-[.95] duration-200 justify-self-end'>Next Page</button>
                </div>
                {data? <div
                    className='py-3 px-4  flex flex-wrap mx-auto justify-center gap-2'
                    >{
                        data && data.map((m,i)=>(
                            <MovieCard key={i} movie={m} type={1} />
                        ))
                    }
                </div>: <Loader/>}
                <div className='w-full py-3 px-4 flex justify-between gap-3'>
                    <button
                    onClick={()=>{
                        if(page>1){
                            setPage(prev=>prev-1);
                        }
                    }} 
                    className={` ${page>1?'bg-blue-500 hover:bg-blue-600':'bg-gray-500 hover:bg-gray-600'} py-1 px-2 text-white rounded-full active:scale-[.95] duration-200 text-sm justify-self-start`}
                    disabled={page<=1}
                    >Previous Page</button>
                    <div className='text-xl bg-stone-800 py-2 px-5 rounded-lg text-white text-center'><span className='hidden sm:inline-block'>Current Page :</span> {page}</div>
                    <button
                    onClick={()=>setPage(prev=>prev+1)} 
                    className='bg-blue-500 py-1 px-2 text-white rounded-full text-sm hover:bg-blue-600 active:scale-[.95] duration-200 justify-self-end'>Next Page</button>
                </div>
            </div>
        </div>
    )
}

export default Movies;