import axios from '../components/base_url';
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PlayCircleFilledOutlinedIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import ThumbDownAltRoundedIcon from '@material-ui/icons/ThumbDownAltRounded';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import styles from './Rows.module.scss'

const img_url = "https://image.tmdb.org/t/p/w500/"

function Rows( {title, url, rowName} ) {
    const [request, setRequest] = useState([]);
    const infoRef = useRef(null)
    const [features, setFeatures ] = useState({            
        border: '1px solid black',
        width: '264px',
        textAlign: 'center',
        display: 'none'
    })

    useEffect(() => {
        async function fetchRowItems() {
            const req = await axios.get(url);
            setRequest(req.data.results)
            return req;
        }
        
        fetchRowItems();
//        console.log(request)
    },[url])

// To show features, i need to add an onHover effect for every item which will change item's css to display features.
// but the problem is, for every row and for every item, there should be a unique class so other's will not change.

// solution is, giving different className for every row like row__container__horror! 


    function hoverHandler(e) {
        document.getElementsByClassName(`${e.target.nextSibling.className}`)[0].style.display = 'unset'
        
    }

    function hoverLeaveHandler(e) {
        document.getElementsByClassName(`${e.target.nextSibling.className}`)[0].style.display = 'none'
    }


    return (
        <div className={`${rowName}_container`}>
            <h2> {title} </h2>
                <div className={styles.row}> 
                    {request.map((card) => (
                        <div key={card.id} className={styles.card}>
                            <img onMouseEnter={hoverHandler} onMouseLeave={hoverLeaveHandler} className={styles.posters} src={`${img_url}${card.poster_path}`}/>
                            <div className={card.id} style={features} ref={infoRef}>
                                    <div className={styles.buttons}>
                                        <PlayCircleFilledOutlinedIcon fontSize="large"/>
                                        <AddCircleOutlineOutlinedIcon fontSize="large" />
                                        <ThumbUpAltOutlinedIcon fontSize="large" />
                                        <ThumbDownAltOutlinedIcon fontSize="large" />
                                        <KeyboardArrowDownOutlinedIcon fontSize="large" />
                                    </div>
                                    <div className={styles.name}>{card.name ? card.name : card.title}</div>
                                    <p className={styles.overview}> {card.overview} </p>
                            </div>
                        </div>
                    ))}
                </div>
            
        </div>
    )
}

export default Rows
