import Rows from '../components/Rows'
import requests from '../components/requests';
import Navigation from '../components/navigation';

function homepage() {
    return (
        
        <div className="homepage-app">
            <Navigation />
            <Rows title="NETFLIX ORIGINALS" url={requests.fetchNetflixOriginals} /> 
            <Rows title="Trending Now" url={requests.fetchTrending}/> 
            <Rows title="Horrors" url={requests.fetchHorrorMovies}/> 

        </div>
    )
}

export default homepage
