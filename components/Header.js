import React, { useEffect } from 'react';
import Navigation from './navigation';
import styles from './Header.module.scss'
import Link from 'next/link';


function Header() {

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


    return (
        <div id="header"className={styles.header}>
            <div className={styles.left}> 
            <Link href="/homepage">
            <img className={styles.logo} src="https://raw.githubusercontent.com/eraygundogmus/netflix-clone/main/assets/logo.png"/>
            </Link>
            <Navigation />
            </div>
            <div className={styles.right}>
                    <img className={styles.search} src="https://raw.githubusercontent.com/eraygundogmus/netflix-clone/885b5f0cc3726de2f215cabf40e86d51618a5c59/assets/search-icon.svg"/>
                    <img className={styles.avatar} src="https://raw.githubusercontent.com/eraygundogmus/netflix-clone/main/assets/avatar.png"/>
            </div>
        
            
        </div>
    )
}

export default Header
