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
                            Seslendirme
                            </span>
                        </a>
                    </li>
                    <li href="#">
                        <a>
                            <span>
                            Sesli Betimleme
                            </span>
                        </a>
                    </li>
                    <li href="#">
                        <a>
                            <span>
                            Yardım Merkezi
                            </span>
                        </a>
                    </li>
                    <li href="#">
                        <a>
                            <span>
                            Hediye Kartları
                            </span>
                        </a>
                    </li>
                    <li href="#">
                        <a>
                            <span>
                            Medya Merkezi
                            </span>
                        </a>
                    </li>
                    <li href="#">
                        <a>
                            <span>
                            Yatırımcı İlişkileri
                            </span>
                        </a>
                    </li>
                    <li href="#">
                        <a>
                            <span>
                            İş İmkanları
                            </span>
                        </a>
                    </li>
                    <li href="#">
                        <a>
                            <span>
                            Çerez Tercihleri
                            </span>
                        </a>
                    </li>
                    <li href="#">
                        <a>
                            <span>
                            Kurumsal Bilgiler
                            </span>
                        </a>
                    </li>
                    <li href="#">
                        <a>
                            <span>
                            Gizlilik
                            </span>
                        </a>
                    </li>
                    <li href="#">
                        <a>
                            <span>
                            Yasal Hükümler
                            </span>
                        </a>
                    </li>
                    <li href="#">
                        <a>
                            <span>
                            Bize Ulaşın
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
