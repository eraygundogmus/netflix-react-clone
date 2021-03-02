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
const strShorter = function truncate(short, n){
    return short?.length > n ? short.substr(0, n-1) + "..." : short;}

function Rows( {title, url, rowName} ) {
    const [request, setRequest] = useState([]);
     const [features, setFeatures ] = useState({            
        textAlign: 'center',
/*         visibility: 'hidden', */
/*         zIndex: '-1', */
/*         backgroundColor: 'grey',
        display: 'flex',
        width: '300px' */
/*         position: 'absolute' */
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
          setTimeout(() => {
/*             document.getElementsByClassName(`${e.target.nextSibling.className}`)[0].style.visibility = 'visible'
             document.getElementsByClassName(`${e.target.nextSibling.className}`)[0].style.top = '0' 
            e.target.style.position = 'absolute'
           e.target.style.maxHeight = '500px' */
          }, 500)
          
//        document.getElementsByClassName(`${e.target.nextSibling.className}`)[0].style.position = 'absolute'
         
    }

    function hoverLeaveHandler(e) {
         setTimeout(() => {          
/*              document.getElementsByClassName(`${e.target.nextSibling.className}`)[0].style.visibility = 'hidden'
              e.target.style.position = 'unset'
             e.target.style.maxHeight = '300px'  */}, 500)


    }

    

    return (
        <div className={`${rowName}_container`}>
            <h2> {title} </h2>
                <div className={styles.container}>
                        <div className={styles.row}> 
                            {request.map((card) => (
                            <div className={styles.parent}> 
                                <div key={card.id} className={styles.card}>
                                    <img onMouseEnter={hoverHandler} onMouseLeave={hoverLeaveHandler} className={styles.posters} src={`${img_url}${card.poster_path}`}/>
                                        <div className={styles.features} style={features} >
                                                <div className={styles.buttons}>
                                                    <PlayCircleFilledOutlinedIcon fontSize="large"/>
                                                    <AddCircleOutlineOutlinedIcon fontSize="large" />
                                                    <ThumbUpAltOutlinedIcon fontSize="large" />
                                                    <ThumbDownAltOutlinedIcon fontSize="large" />
                                                    <KeyboardArrowDownOutlinedIcon fontSize="large" />
                                                </div>
                                                <div className={styles.name}>{card.name ? card.name : card.title}</div>
                                                <p className={styles.overview}> {strShorter(card.overview, 120)} </p>
                                        </div>
                                </div>
                            </div>   
                                ))}
                        </div> 
                </div>
        </div>
    )
}

export default Rows
