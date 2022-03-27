import React from 'react'
import ListMovies from './ListMovies'
import PromotionalMovie from './PromotionalMovie';
import {all_movies_requests} from '../helpers';

const Main = () => {
  return (
    <>
        <PromotionalMovie />
        <ListMovies title="TOP RATED" url={all_movies_requests.getNetflix_TopRated} />
        <ListMovies title="NETFLIX ORIGINALS" url={all_movies_requests.getNetflix_Originals} />
        <ListMovies title="TREND MOVIES" url={all_movies_requests.getNetflix_Trending} />
        <ListMovies title="ACTIONS MOVIES" url={all_movies_requests.getNetflix_Actions} />
        <ListMovies title="ROMANCE MOVIES" url={all_movies_requests.getNetflix_Romance} />
        <ListMovies title="COMEDY MOVIES" url={all_movies_requests.getNetflix_Comedy} />
        <ListMovies title="FEAR MOVIES" url={all_movies_requests.getNetflix_Fear} />
        <ListMovies title="DOCUMENTARIES" url={all_movies_requests.getNetflix_Documentaries} />
    </>
  )
}

export default Main