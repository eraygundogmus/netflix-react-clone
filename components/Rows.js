import axios from '../components/base_url';
import React, { useState, useEffect } from 'react';


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

    return (
        <div className="row__container">
            <h2> {title} </h2>
            {request.map((card) => (
                <div> {card.name ? card.name : card.title}  </div>
            ))}
            
        </div>
    )
}

export default Rows
