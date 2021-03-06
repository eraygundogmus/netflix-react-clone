import React, { useEffect, useState } from 'react';
import Navigation from './navigation';
import styles from './Header.module.scss'
import Link from 'next/link';
import axios from '../components/base_url';




function Header( {url} ) {
    const [search, setSearch] = useState(true);


    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                document.getElementById("header").classList.add('header_background')
                
            } else document.getElementById("header").classList.remove('header_background')
        });
        return () => {
            window.removeEventListener('scroll', () => {
                if (window.scrollY < 100) {
                    document.getElementById("header").classList.remove('header_background')
                } else document.getElementById("header").classList.add('header_background')
            });
        };
    }, []);


    useEffect(() => {
        if (search)
        window.addEventListener('click', (e) => {
            if (e.target == document.getElementById("search_icon")) {
                setSearch(false)} else if (document.getElementById("search_active")) {
                    if (e.target !== document.getElementById("search_active")) {
                        setSearch(true)
                    }
                }
        });
    }, []);

    // don't forget to add return remove event listener to save cpu



    return (
        <div id="header" className={styles.header}>
            <div className={styles.left}> 
            <Link href="/homepage">
            <img className={styles.logo} src="https://raw.githubusercontent.com/eraygundogmus/netflix-clone/main/assets/logo.png"/>
            </Link>
            <Navigation />
            </div>
            <div className={styles.right}>

                    {search == true ? <img id='search_icon' className={styles.search} src="https://raw.githubusercontent.com/eraygundogmus/netflix-clone/885b5f0cc3726de2f215cabf40e86d51618a5c59/assets/search-icon.svg"/> : 
                    <div  className={styles.search_active}><img className={styles.search} src="https://raw.githubusercontent.com/eraygundogmus/netflix-clone/885b5f0cc3726de2f215cabf40e86d51618a5c59/assets/search-icon.svg"/>
                    <input autoComplete="off" id="search_active" type='text' placeholder='Titles,people,genres'></input></div> }

                    <img className={styles.avatar} src="https://raw.githubusercontent.com/eraygundogmus/netflix-clone/main/assets/avatar.png"/>
            </div>
        
            
        </div>
    )
}

export default Header
