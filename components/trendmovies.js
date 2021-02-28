import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TrendMovies(hits) {
    const [data, setData] = useState( { hits: []} )

    useEffect(async () => {
        const result = await axios('https://api.themoviedb.org/3/trending/movie/week?api_key=4bce0e6dd9c6ea1738fa02f130b33d2b')
        setData(result.data);
        console.log(data.results)

    }, [] )


    return (
        <div>
         <h1> try</h1>
        </div>
    )
}

export default TrendMovies
