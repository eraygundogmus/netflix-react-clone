import Rows from '../components/Rows'
import requests from '../components/requests';
import Header from '../components/Header';
import Bilboard from '../components/Bilboard';
import Footer from '../components/Footer'

function homepage() {
    return (
        
        <div className="homepage-app">
            <Header />
            <Bilboard type="S E R I E S"url={requests.fetchNetflixOriginals}/>
                <div className="all_rows">
                <Rows title="NETFLIX ORIGINALS" rowName="netflix_originals_row" url={requests.fetchNetflixOriginals} /> 
                <Rows title="Trending Now" rowName="trending_row" url={requests.fetchTrending}/> 
                <Rows title="Horrors" rowName="horrors_row" url={requests.fetchHorrorMovies}/> 
                </div>
                <Footer />
        </div>
    )
}

export default homepage
