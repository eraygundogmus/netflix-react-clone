import axios from '../components/base_url';
import React, { useState, useEffect } from 'react';


const img_url = "https://image.tmdb.org/t/p/w1280"

function Bilboard( { url} ) {
    const [bilboard, setBilboard] = useState([]);

    useEffect(() => {
        async function fetchBilboard() {
            const req = await axios.get(url);
            setBilboard(req.data.results)
            return req;
        }
        fetchBilboard();
    },[url])


    return (
        <div className="bilboard__container">

            {bilboard.slice(7,8).map((item) => (
                <div key={item.id} className="row__container__card">
                <div>{item.name ? item.name : item.title}</div>
                <img src={`${img_url}${item.backdrop_path}`}/>
                </div>
            ))}
            
        </div>
    )
}

export default Bilboard
