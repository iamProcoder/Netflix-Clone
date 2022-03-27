import {axiosCreator, all_movies_requests} from '../helpers';

const fetchMovie = async () => {
    const movie_originals = await axiosCreator.get(all_movies_requests.getNetflix_Originals);
    return movie_originals;
}

const fetchMovies = async (url) => {
  const getMovies = await axiosCreator.get(url);
  return getMovies;
}

  export { fetchMovie, fetchMovies}