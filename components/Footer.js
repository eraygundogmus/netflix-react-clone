import React from 'react';
import styles from './Footer.module.scss';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.footer_medias}>
                    <img src="https://raw.githubusercontent.com/eraygundogmus/netflix-clone/885b5f0cc3726de2f215cabf40e86d51618a5c59/assets/facebook.svg" alt="svg"/>
                    <img src="https://raw.githubusercontent.com/eraygundogmus/netflix-clone/885b5f0cc3726de2f215cabf40e86d51618a5c59/assets/instagram.svg" alt="svg"/>
                    <img src="https://raw.githubusercontent.com/eraygundogmus/netflix-clone/885b5f0cc3726de2f215cabf40e86d51618a5c59/assets/twitter.svg" alt="svg"/>
                    <img src="https://raw.githubusercontent.com/eraygundogmus/netflix-clone/885b5f0cc3726de2f215cabf40e86d51618a5c59/assets/youtube.svg" alt="svg"/> 
                </div>
                <ul className={styles.footer_nav}>
                    <li href="#">
                        <a>
                            <span>
                            Audio and Subtitles
                            </span>
                        </a>
                    </li>
                    <li href="#">
                        <a>
                            <span>
                            Audio Description
                            </span>
                        </a>
                    </li>
                    <li href="#">
                        <a>
                            <span>
                            Help Center
                            </span>
                        </a>
                    </li>
                    <li href="#">
                        <a>
                            <span>
                            Gift Cards
                            </span>
                        </a>
                    </li>
                    <li href="#">
                        <a>
                            <span>
                            Media Center
                            </span>
                        </a>
                    </li>
                    <li href="#">
                        <a>
                            <span>
                            Investor Relations
                            </span>
                        </a>
                    </li>
                    <li href="#">
                        <a>
                            <span>
                            Jobs
                            </span>
                        </a>
                    </li>
                    <li href="#">
                        <a>
                            <span>
                            Cookie Preferences
                            </span>
                        </a>
                    </li>
                    <li href="#">
                        <a>
                            <span>
                            Legal Notices
                            </span>
                        </a>
                    </li>
                    <li href="#">
                        <a>
                            <span>
                            Privacy
                            </span>
                        </a>
                    </li>
                    <li href="#">
                        <a>
                            <span>
                            Corporate Information
                            </span>
                        </a>
                    </li>
                    <li href="#">
                        <a>
                            <span>
                            Contact Us
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
