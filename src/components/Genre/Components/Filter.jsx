import React, { useState } from 'react'

function Filter({
    genre,
    setGenre,
    moviesSelected,
    setMoviesSelected,
    fetchData,
    andSelected,
    setAndSelected
}){
    const [filterHidden, setFilterHidden] = useState(true);
    const genreCollection = {
        movies : [{"id": 28,"name": "Action"},{"id": 12,"name": "Adventure"},{"id": 16,"name": "Animation"},{"id": 35,"name": "Comedy"},{"id": 80,"name": "Crime"},{"id": 99,"name": "Documentary"},{"id": 18,"name": "Drama"},{"id": 10751,"name": "Family"},{"id": 14,"name": "Fantasy"},{"id": 36,"name": "History"},{"id": 27,"name": "Horror"},{"id": 10402,"name": "Music"},{"id": 9648,"name": "Mystery"},{"id": 10749,"name": "Romance"},{"id": 878,"name": "Science Fiction"},{"id": 10770,"name": "TV Movie"},{"id": 53,"name": "Thriller"},{"id": 10752,"name": "War"},{"id": 37,"name": "Western"}],
        tv : [{"id": 10759,"name": "Action & Adventure"},{"id": 16,"name": "Animation"},{"id": 35,"name": "Comedy"},{"id": 80,"name": "Crime"},{"id": 99,"name": "Documentary"},{"id": 18,"name": "Drama"},{"id": 10751,"name": "Family"},{"id": 10762,"name": "Kids"},{"id": 9648,"name": "Mystery"},{"id": 10763,"name": "News"},{"id": 10764,"name": "Reality"},{"id": 10765,"name": "Sci-Fi & Fantasy"},{"id": 10766,"name": "Soap"},{"id": 10767,"name": "Talk"},{"id": 10768,"name": "War & Politics"},{"id": 37,"name": "Western"}]
    };

    const handleApply = ()=>{
        fetchData();
        setFilterHidden(true);
    }

    return (
        <div className='bg-gray-200 py-2 '>
            <button 
            onClick={()=>setFilterHidden(prev=>!prev)}
            className='bg-blue-600 text-white min-w-[80px] py-2 sm:py-2 sm:px-4 mx-3 text-md rounded-md hover:bg-blue-500 active:scale-[.95]'>
            Filter
            </button>
            <div
            className={`${filterHidden? 'hidden':'block'} pt-4 pb-1 px-2 sm:px-4`}
            >
                <div 
                className='flex justify-around sm:inline-flex sm:w-[40vw]  bg-gray-300 py-1 my-1'>
                    <div>
                        <label htmlFor="movieOrTv" className='py-2 px-3'>Movies</label>
                        <input type="checkbox" id='movieOrTv' checked={moviesSelected} onChange={()=>{}}
                        onClick={()=>{
                            if(!moviesSelected){
                                setMoviesSelected(true)
                                setGenre([]);
                            }
                        }} />
                    </div>
                    <div>
                        <label htmlFor="movieOrTv1" className='py-2 px-3'>TV-Series</label>
                        <input type="checkbox" id='movieOrTv1' checked={!moviesSelected} onChange={()=>{}} 
                        onClick={()=>{
                            if(moviesSelected){
                                setMoviesSelected(false)
                                setGenre([]);
                            }
                        }} />
                    </div>
                </div>
                <div 
                className='flex justify-around sm:inline-flex sm:w-[40vw] bg-gray-300 py-1 my-1 sm:mx-1'>
                    <div>
                        <label htmlFor="andOr" className='py-2 px-3'>AND</label>
                        <input type="checkbox" id='andOr' checked={andSelected} onChange={()=>{}} onClick={()=>setAndSelected(true)} />
                    </div>
                    <div>
                        <label htmlFor="andOr1" className='py-2 px-3'>OR</label>
                        <input type="checkbox" id='andOr1' checked={!andSelected} onChange={()=>{}} onClick={()=>setAndSelected(false)} />
                    </div>
                </div>
                <div 
                className='py-2 border-2 border-gray-400 px-1 sm:px-4'>
                    {
                        moviesSelected ?
                            <div className='flex flex-wrap gap-2'>
                                {
                                    genreCollection.movies.map(m=>(
                                        <div 
                                        className={` ${genre.includes(m.id)?'bg-blue-400': 'bg-blue-200'} py-1 px-1 sm:px-3 rounded-md border-[1px] border-gray-500 cursor-pointer`}
                                        onClick={()=>{
                                            if(genre.includes(m.id)){
                                                let newArr = [...genre];
                                                newArr = newArr.filter(a=> a!=m.id);
                                                setGenre(newArr);
                                            }else{
                                                setGenre(prev=>[...prev,m.id]);
                                            }
                                        }}
                                        key={m.id} 
                                        id={m.id} >{m.name}</div>
                                    ))
                                }
                            </div>
                        :
                            <div className='flex flex-wrap gap-2'>
                                {
                                    genreCollection.tv.map(m=>(
                                        <div 
                                        className={` ${genre.includes(m.id)?'bg-blue-400': 'bg-blue-200'} py-1 px-1 sm:px-3 rounded-md border-[1px] border-gray-500 cursor-pointer`}
                                        onClick={()=>{
                                            if(genre.includes(m.id)){
                                                let newArr = [...genre];
                                                newArr = newArr.filter(a=> a!=m.id);
                                                setGenre(newArr);
                                            }else{
                                                setGenre(prev=>[...prev,m.id]);
                                            }
                                        }}
                                        key={m.id} 
                                        id={m.id} >{m.name}</div>
                                    ))
                                }
                            </div>
                    }
                </div>
                <div className='flex justify-end'>
                    <div
                    onClick={handleApply} 
                    className='py-1 my-1 px-2 sm:px-4 text-white  bg-blue-600 cursor-pointer hover:bg-blue-500 rounded-md active:scale-[.95]'>Apply</div>
                </div>
            </div>
        </div>
    )
}

export default Filter