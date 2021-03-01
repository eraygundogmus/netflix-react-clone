import Rows from '../components/Rows'
import requests from '../components/requests';
import Header from '../components/Header';
import Bilboard from '../components/Bilboard';

function homepage() {
    return (
        
        <div className="homepage-app">
            <Header />
            <Bilboard url={requests.fetchNetflixOriginals}/>
            <Rows title="NETFLIX ORIGINALS" rowName="netflix_originals_row" url={requests.fetchNetflixOriginals} /> 
            <Rows title="Trending Now" rowName="trending_row" url={requests.fetchTrending}/> 
            <Rows title="Horrors" rowName="horrors_row" url={requests.fetchHorrorMovies}/> 

        </div>
    )
}

export default homepage
