import React from 'react'

function ButtonsArray({page,setPage,isDisabled, maxPages}) {
    return (
        <div className='w-full py-3 px-4 flex justify-between gap-3'>
            <button
            onClick={()=>{
                if(page>1){
                    setPage(prev=>prev-1);
                }
            }} 
            className={` ${page>1?'bg-blue-500 hover:bg-blue-600':'bg-gray-500 hover:bg-gray-600'} py-1 px-2 text-white rounded-full active:scale-[.95] duration-200 min-w-[80px] text-sm justify-self-start`}
            disabled={page<=1 || isDisabled}
            >Previous</button>
            <div className='text-xl bg-stone-800 py-2 px-5 rounded-lg text-white text-center'><span className='hidden sm:inline-block'>Current Page :</span> {page}</div>
            <button
            disabled={isDisabled || page == maxPages}
            onClick={()=>setPage(prev=>prev+1)} 
            className={` ${page<maxPages?'bg-blue-500 hover:bg-blue-600':'bg-gray-500 hover:bg-gray-600'} py-1 px-2 text-white rounded-full active:scale-[.95] duration-200 min-w-[80px] text-sm justify-self-start`}>Next</button>
        </div>
    )
}

export default ButtonsArray