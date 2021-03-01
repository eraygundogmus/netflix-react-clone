import Rows from '../components/Rows';
import requests from '../components/requests';
import Header from '../components/Header';

function Movies() {
    return (
        <div className="homepage-app">
            <Header />
            <Rows title="Horrors" url={requests.fetchHorrorMovies}/> 
        </div>
    )
}

export default Movies
