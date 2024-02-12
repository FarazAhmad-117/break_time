import React,{ useEffect, useState } from 'react'
import { Filter, ButtonsArray } from './Components'
import Loader from '../Loader';
import { fetchMoviesDataFromGenre, fetchSeriesDataFromGenre } from '../../TMDB';
import MovieCard from '../MovieCard';

function Genre() {
    const [genre,setGenre] = useState([28,12]);
    const [page,setPage] = useState(1);
    const [maxPages,setMaxPages] = useState(0);
    const [moviesSelected,setMoviesSelected] = useState(true);
    const [isLoading,setisLoading] = useState(false);
    const [andSelected,setAndSelected] = useState(true);
    const [data,setData] = useState([]);
    const fetchData = async ()=>{
        setisLoading(true);
        let res;
        if(moviesSelected){
            res = await fetchMoviesDataFromGenre(genre,page,andSelected);
        }else{
            res = await fetchSeriesDataFromGenre(genre,page,andSelected);
        }
        setMaxPages(res.total_pages)
        setData(res.results);
        window.moveTo(0,0);
        setisLoading(false);
    }
    useEffect(()=>{
        fetchData();
    },[page]);

    return (
        <div className='min-h-[80dvh] py-2 px-1 sm:px-4'> 
        
            {/* Filter Section */}
            <Filter 
            genre= {genre} 
            setGenre={setGenre} 
            moviesSelected={moviesSelected} 
            setMoviesSelected={setMoviesSelected} 
            fetchData={fetchData} 
            andSelected={andSelected}
            setAndSelected={setAndSelected}
            />
            
            {/* Movies Section or TV-Series Section */}
            <ButtonsArray page={page} setPage={setPage} isDisabled={isLoading} maxPages={maxPages} />
            <div className='sm:pt-2 sm:pb-[40px] sm:px-3 mb-7'>
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
                                <MovieCard key={i} movie={m} type={moviesSelected?1:2} />
                            ))
                        }
                    </div>
                }
            </div>
            <ButtonsArray page={page} setPage={setPage} isDisabled={isLoading} maxPages={maxPages} />
        
        </div>
    )
}

export default Genre