import Link from 'next/Link';

function Navigation() {
    return (
        <nav>
            <Link href="/homepage">
                <a>Homepage</a>
            </Link>
            <Link href="/movies">
                <a>Movies</a>
            </Link>
        </nav>
    )
}

export default Navigation