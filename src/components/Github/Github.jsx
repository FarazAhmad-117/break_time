import React, { useCallback, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    // const [data,setData] = useState([]);
    // const getGitData = useCallback(()=>{
    //     fetch('https://api.github.com/users/FarazAhmad-117')
    //     .then((res)=>res.json())
    //     .then(data=>{
    //         setData(data);
    //     });
    // })
    // useEffect(()=>{
    //     getGitData();
    // },[]);

    return (
        <>
            <div className='text-center text-5xl my-6 mx-auto bg-zinc-800 text-white py-5'>Github </div>
            <div className="w-full">
                <div className="max-w-[1080px] mx-auto w-full min-h-[400px] px-10">
                    <img 
                    className='w-full max-w-[400px] object-cover my-5 mx-auto block rounded-full'
                    src={data?data.avatar_url:""} 
                    alt="Image" />
                    <h2 className='text-center text-4xl py-5 my-auto font-mono font-extrabold text-emerald-900'>Faraz Ahmad 117</h2>
                    <h2 className='text-teal-800 text-4xl text-center max-w-[600px] rounded-2xl bg-gray-100 my-3 mx-auto pt-3 py-6'>Github Followers: <span className='text-5xl text-amber-900'>{ data? data.followers:""}</span></h2>
                    <h2 className='text-teal-800 text-4xl text-center max-w-[600px] rounded-2xl bg-gray-100 my-3 mx-auto pt-3 py-6'>Public Repos: <span className='text-5xl text-amber-900'>{data?data.public_repos:" "}</span></h2>
                </div>
            </div>
        </>
    )
}

export default Github

export const loadGitData = async()=>{
    const response = await fetch('https://api.github.com/users/FarazAhmad-117');
    let data = await response.json();
    return data; 
}