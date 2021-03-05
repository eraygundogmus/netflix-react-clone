import axios from '../components/base_url';
import React, { useState, useEffect } from 'react';
import styles from './Bilboard.module.scss'


const img_url = "https://image.tmdb.org/t/p/w1280"

function Bilboard( { url, type} ) {
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
        <div className={styles.bilboard}>

            {bilboard.slice(7,8).map((item) => (
                <div className={styles.bilboard_container}>  
                    <img className={styles.bilboard_img}src={`${img_url}${item.backdrop_path}`}/>
                        <div key={item.id} className={styles.bilboard_card}>
                            <div className={styles.category}> 
                            <img className={styles.icon} src="https://github.com/eraygundogmus/netflix-react-clone/blob/main/components/assets/netflix.png?raw=true"/>
                            <h4>{type}</h4>
                            </div>
                            <div className={styles.movie_name}>{item.name ? item.name : item.title}</div>
                            <button className={styles.button_1}> Play </button>
                            <button className={styles.button_2}> More information</button>
                        </div>
                </div>
            ))}
            
        </div>
    )
}

export default Bilboard
