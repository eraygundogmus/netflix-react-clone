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
            <Rows title="Horrors" url={requests.fetchHorrorMovies}/> 
            </div>
            <Footer />
        </div>
    )
}

export default Movies
