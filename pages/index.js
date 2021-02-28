import Link from 'next/link';
import unfetch from 'isomorphic-unfetch';
import TrendMovies from '../components/trendmovies'

export default function Home() {
  return (
    <div className="container">
      <TrendMovies/>
      <img style={{ width : '70px'}} src="https://raw.githubusercontent.com/eraygundogmus/netflix-clone/main/assets/logo.png"/>
      <h1> Who is watching? </h1>
      <Link href="/homepage">
      <img className="avatar" src="https://occ-0-4451-778.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABeejl5K5m5X89-zGMTGwJpgBHWBDoeq0GBckfW0ozDQBUfsbEdB8gpxl6Ix18UfRtFZboYvFezfogNFHoiOd-kNukJ2d.png?r=dd1"/>
      </Link>
      
    </div>
  )
}

/* export async function getStaticProps() {
  const API_KEY = "4bce0e6dd9c6ea1738fa02f130b33d2b"
  const data = await unfetch("https://api.themoviedb.org/3/trending/movie/week?api_key=4bce0e6dd9c6ea1738fa02f130b33d2b")
  const characters = await data.json()
  console.log(characters)
  return {
    props: {
    characters
    }, // will be passed to the page component as props
  }
} */
