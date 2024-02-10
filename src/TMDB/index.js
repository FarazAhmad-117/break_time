
export const imageUrl = import.meta.env.VITE_TMDB_IMAGE_URL;
const token = import.meta.env.VITE_TMDB_MY_ULTIMATE_TOKEN;



export const fetchTrendingWebSeries= async(page=1)=>{
    const url = 'https://api.themoviedb.org/3/trending/tv/day?language=en-US&page='+page;
    const options = {
    method: 'GET',
    headers: {
            accept: 'application/json',
            Authorization: token
        }
    };
    try{
        const res = await fetch(url, options);
        const data = await res.json();
        return data;
    }catch(err){
        console.error(err);
    }
}



export const fetchTrendingMovies = async(page=1)=>{
    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US&page='+ page;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: token
        }
    };
    try{
        const res = await fetch(url, options);
        const data = await res.json();
        return data;
    }catch(err){
        console.error(err);
    }
}


export const fetchSeasonDataById = async(id)=>{
    const url = `https://api.themoviedb.org/3/tv/${id}?language=en-US`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: token
        }
    };
    try{
        const res = await fetch(url, options);
        const data = await res.json();
        return data;
    }catch(err){
        console.error(err);
    }
}

export const fetchMovieDataByID=async(id)=>{
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: token
        }
    };
    try{
        const res = await fetch(url, options);
        const data = await res.json();
        return data;
    }catch(err){
        console.error(err);
    }
}

export const fetchDataFromUrl=async(url)=>{
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: token
        }
    };
    try{
        const res = await fetch(url, options);
        const data = await res.json();
        return data;
    }catch(err){
        console.error(err);
    }
}

export const fetchMoviesDataFromQuery = async(query)=>{
    let q="";
    for(let i=0;i<query.length;i++){
        q+=query[i];
        if(i!=query.length -1){
            q+="+";
        }
    }
    let url = `https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&query=${q}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: token
        }
    };
    try{
        const res = await fetch(url, options);
        const data = await res.json();
        return data;
    }catch(err){
        console.error(err);
    }
}


export const fetchSeriesDataFromQuery = async(query)=>{
    let q="";
    for(let i=0;i<query.length;i++){
        q+=query[i];
        if(i!=query.length -1){
            q+="+";
        }
    }
    let url = `https://api.themoviedb.org/3/search/tv?sort_by=popularity.desc&query=${q}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: token
        }
    };
    try{
        const res = await fetch(url, options);
        const data = await res.json();
        return data;
    }catch(err){
        console.error(err);
    }
}
