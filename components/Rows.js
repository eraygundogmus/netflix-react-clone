import axios from '../components/base_url';
import React, { useState, useEffect } from 'react';
import PlayCircleFilledOutlinedIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ThumbDownAltRoundedIcon from '@material-ui/icons/ThumbDownAltRounded';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';

const img_url = "https://image.tmdb.org/t/p/w500/"

function Rows( {title, url} ) {
    const [request, setRequest] = useState([]);
    const [features, setFeatures ] = useState(false)

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
    function hoverHandler(e) {
        e.target.style.width = '300px'
    }

    return (
        <div className="row__container">
            <h2> {title} </h2>
            {request.map((card) => (
                <div key={card.id} className="row__container__card">
                <div>{card.name ? card.name : card.title}</div>
                <img /* onMouseEnter={hoverHandler} */ src={`${img_url}${card.poster_path}`}/>
                <p> {card.overview} </p>
                <PlayCircleFilledOutlinedIcon fontSize="large"/>
                <AddCircleOutlineOutlinedIcon fontSize="large" />
                <ThumbUpAltOutlinedIcon fontSize="large" />
                <ThumbDownAltOutlinedIcon fontSize="large" />
                <KeyboardArrowDownOutlinedIcon fontSize="large" />
                </div>
            ))}
            
        </div>
    )
}

export default Rows
