import React from 'react'
import { useNavigate } from 'react-router';

function ErrorBoundry() {
    const navigate = useNavigate();
    return (
        <div className='max-w-[1080px] py-[50px] mx-auto'>
            <h1 className='text-9xl text-center text-red-600'>Oops !</h1>
            <img 
            src="https://cdn2.hubspot.net/hubfs/242200/shutterstock_774749455.jpg" 
            alt="Error 404"
            className='mx-auto object-cover w-full'
            />
            <h1 className='text-5xl text-center text-stone-600 my-3 pt-11'>Unknown Error Occured</h1>
            <p className='text-lg text-center text-stone-700 my-2'>Kindly refer to the <span className='p-1 text-stone-900 font-bold'> Home Page </span> again by clicking the following button...</p>
            <button 
            className='w-[180px] mx-auto block text-2xl py-2 mt-9 bg-blue-500 hover:bg-blue-600 active:scale-[.95] duration-300 rounded-full text-white border-blue-800 border cursor-pointer' 
            onClick={()=>{
                navigate("/");
            }}>Home Page</button>
        </div>
    )
}

export default ErrorBoundry