import Rows from '../components/Rows';
import requests from '../components/requests';
import Navigation from '../components/navigation';

function Movies() {
    return (
        <div className="homepage-app">
            <Navigation />
            <Rows title="Horrors" url={requests.fetchHorrorMovies}/> 
        </div>
    )
}

export default Movies
