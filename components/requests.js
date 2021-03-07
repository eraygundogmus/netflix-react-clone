  
const API_KEY = "4bce0e6dd9c6ea1738fa02f130b33d2b";
let query = null

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
  fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
  fetchMusicMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
  fetchTVAction: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
  fetchTVAnimation: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
  fetchTvComedy: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  fetchTvDrama: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
  fetchTvFamily: `/discover/tv?api_key=${API_KEY}&with_genres=10751`,
  fetchTvReality: `/discover/tv?api_key=${API_KEY}&with_genres=10764`,
  fetchTvTalk: `/discover/tv?api_key=${API_KEY}&with_genres=10767`,
  fetchSearch: `/search/multi?api_key=${API_KEY}&query=${query}`
};

export default requests;