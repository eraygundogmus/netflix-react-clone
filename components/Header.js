import React from 'react';
import Navigation from './navigation';
import styles from './Header.module.scss'



function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.left}> 
            <img className={styles.logo} src="https://raw.githubusercontent.com/eraygundogmus/netflix-clone/main/assets/logo.png"/>
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
