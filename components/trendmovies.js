import React, { useState, useEffect } from 'react';
import MovieContainer from "./moviecontainers"

 function TrendMovies() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        const res =  await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=4bce0e6dd9c6ea1738fa02f130b33d2b');
        const then = await res.json();
        const result = await then.results
        
        await console.log(result)
        await setData(result);              
    };
    fetchData();
    
    
    
    }, [] )
    
    console.log("State-data :", data)

    return (
        <div>
         { data ? (<MovieContainer data={data}/>) : "veri yok" }
        </div>
    )
}

export default TrendMovies
