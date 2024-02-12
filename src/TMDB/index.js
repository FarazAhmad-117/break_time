
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

export const fetchMoviesDataFromGenre = async(genres,page,and)=>{
    let q="";
    for(let i=0;i<genres.length;i++){
        q+=genres[i];
        if(i!=genres.length -1){
            if(and)
                q+=",";
            else q+="|";
        }
    }
    let url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${q}`;
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
export const fetchSeriesDataFromGenre = async(genres,page,and)=>{
    let q="";
    for(let i=0;i<genres.length;i++){
        q+=genres[i];
        if(i!=genres.length -1){
            if(and)
                q+=",";
            else q+="|";
        }
    }
    let url = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${q}`;
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
