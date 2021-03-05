import Link from 'next/link';
import styles from './Navigation.module.scss'

function Navigation() {
    return (
        <nav className={styles.header_navbar}>
            <Link href="/homepage">
                <a className={styles.navbar_link}>Homepage</a>
            </Link>
            <Link href="/tvshows">
                <a className={styles.navbar_link}>TV Shows</a>
            </Link>
            <Link href="/movies">
                <a className={styles.navbar_link}>Movies</a>
            </Link>
        </nav>
    )
}

export default Navigation
