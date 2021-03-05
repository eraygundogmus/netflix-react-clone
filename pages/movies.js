import Rows from '../components/Rows';
import requests from '../components/requests';
import Header from '../components/Header';
import Bilboard from '../components/Bilboard';
import Footer from '../components/Footer'

function Movies() {
    return (
        <div className="homepage-app">
            <Header />
            <Bilboard type="M O V I E S"url={requests.fetchActionMovies}/>
            <div className="all_rows">
            <Rows title="Comedy" rowName="comedy_row" url={requests.fetchComedyMovies}/> 
            <Rows title="Top Rated" rowName="toprated_row" url={requests.fetchTopRated}/> 
            <Rows title="Trending" rowName="trending_row" url={requests.fetchTrending}/> 
            <Rows title="Action" rowName="action_row" url={requests.fetchActionMovies}/> 
            <Rows title="Horrors" rowName="horrors_row" url={requests.fetchHorrorMovies}/>
            <Rows title="Family" rowName="family_row" url={requests.fetchFamilyMovies}/>
            <Rows title="Drama" rowName="drama_row" url={requests.fetchDramaMovies}/>
            <Rows title="Music" rowName="music_row"url={requests.fetchMusicMovies}/>
            </div>
            <Footer />
        </div>
    )
}

export default Movies
