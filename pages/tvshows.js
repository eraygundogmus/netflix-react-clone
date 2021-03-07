import Rows from '../components/Rows';
import requests from '../components/requests';
import Header from '../components/Header';
import Bilboard from '../components/Bilboard';
import Footer from '../components/Footer'

function Movies() {
    return (
        <div className="homepage-app">
            <Header />
            <Bilboard type="S E R I E S"url={requests.fetchTVAction}/>
            <div className="all_rows">
            <Rows title="Comedy" rowName="tv_comedy_row" url={requests.fetchTvComedy}/>
            <Rows title="Netflix Originals" rowName="tv_netflixoriginals_row" url={requests.fetchNetflixOriginals}/> 
            <Rows title="Action" rowName="tv_action_row" url={requests.fetchTVAction}/> 
            <Rows title="Animation" rowName="tv_animation_row" url={requests.fetchTVAnimation}/> 
            <Rows title="Drama" rowName="tv_drama_row" url={requests.fetchTvDrama}/> 
            <Rows title="Talk" rowName="tv_talk_row" url={requests.fetchTvTalk}/> 
            <Rows title="Reality" rowName="tv_reality_row" url={requests.fetchTvReality}/> 
            <Rows title="Family" rowName="tv_family_row" url={requests.fetchTvFamily}/> 
            </div>
            <Footer />
        </div>
    )
}

export default Movies
