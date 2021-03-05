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
                <Rows title="Netflix Originals" rowName="netflix_originals_row" url={requests.fetchNetflixOriginals} /> 
                <Rows title="Trending Now" rowName="trending_row" url={requests.fetchTrending}/> 
                <Rows title="Horror Movies" rowName="horrors_row" url={requests.fetchHorrorMovies}/> 
                <Rows title="Animation TV Shows" rowName="tv_animation_row" url={requests.fetchTVAnimation}/> 
                <Rows title="Crime TV Dramas" rowName="tv_drama_row" url={requests.fetchTvDrama}/>
                <Rows title="TV Comedies" rowName="tv_comedy_row" url={requests.fetchTvComedy}/>
                <Rows title="Award-Winning Films" rowName="toprated_row" url={requests.fetchTopRated}/>
                <Rows title="Dramas" rowName="drama_row" url={requests.fetchDramaMovies}/> 
                <Rows title="Action Movies" rowName="action_row" url={requests.fetchActionMovies}/> 
                </div>
                <Footer />
        </div>
    )
}

export default homepage
