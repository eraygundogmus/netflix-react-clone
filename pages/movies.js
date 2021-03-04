import Rows from '../components/Rows';
import requests from '../components/requests';
import Header from '../components/Header';
import Bilboard from '../components/Bilboard';

function Movies() {
    return (
        <div className="homepage-app">
            <Header />
            <Bilboard url={requests.fetchActionMovies}/>
            <div className="all_rows">
            <Rows title="Horrors" url={requests.fetchHorrorMovies}/> 
            </div>
        </div>
    )
}

export default Movies
