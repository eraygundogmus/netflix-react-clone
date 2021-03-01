import axios from '../components/base_url';
import React, { useState, useEffect } from 'react';


const img_url = "https://image.tmdb.org/t/p/w500/"

function Rows( {title, url} ) {
    const [request, setRequest] = useState([]);

    useEffect(() => {
        async function fetchRowItems() {
            const req = await axios.get(url);
            setRequest(req.data.results)
            return req;
        }
        
        fetchRowItems();
        console.log(request)
    },[url])

// To show features, i need to add an onHover effect for every item which will change item's css to display features.
// but the problem is, for every row and for every item, there should be a unique class so other's will not change.

// solution is, giving different className for every row like row__container__horror!


    return (
        <div className="row__container">
            <h2> {title} </h2>
            {request.map((card) => (
                <div className="row__container__card">
                <div>{card.name ? card.name : card.title}</div>
                <img src={`${img_url}${card.poster_path}`}/>
                </div>
            ))}
            
        </div>
    )
}

export default Rows
