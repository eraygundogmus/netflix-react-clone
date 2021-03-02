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
        transform: 'scale(1.3)',
        zIndex: '9999',
        position: 'absolute'

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


    function hoverHandler(e) {
          setTimeout(() => {
            const sth = null

          
//        document.getElementsByClassName(`${e.target.nextSibling.className}`)[0].style.position = 'absolute'
         
    }, 500)}

/*     function hoverLeaveHandler(e) {
         setTimeout(() => {

              document.getElementsByClassName(`${e.target.nextSibling.className}`)[0].style.visibility = 'hidden'
              e.target.style.position = 'unset'
             e.target.style.maxHeight = '300px' , 500)


    } */
    
// style={features}

    return (
        <div className={`${rowName}_container`}>
            <h2> {title} </h2>
                <div className={styles.container}>
                        <div className={styles.row}> 
                            {request.map((card) => (
                            <div className={styles.parent}> 
                                <div onMouseEnter={hoverHandler}  id="card" key={card.id} className={styles.card}>
                                    <img className={styles.posters} src={`${img_url}${card.poster_path}`}/>
                                        <div className={styles.features} >
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
