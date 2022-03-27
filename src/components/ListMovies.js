import React, { useState, useEffect } from 'react'
import { fetchMovies } from '../services/MovieService';

const ListMovies = ({title, url}) => {

  const [movies, setMovies] = useState([]);
  // const [isHover, setIsHover] = useState({hover:false, id:0});

  useEffect(() => {    
    async function fetchData() {
      const getMovies = await fetchMovies(url);
      setMovies(getMovies.data.results);
    }

    fetchData();
  }, [url]);

  // const handleHover = (hover, id) => setIsHover({hover, id});

  return (
    <div className="text-white ml-5">
      <h2 className="text-lg font-extrabold pt-1.5">{title}</h2>
      <div className="flex overflow-y-hidden overflow-x-scroll p-5 no-scrollbar">
        {movies?.map((movie) => (
          
            <img
            id={movie.id}
              key={movie?.id}
              className="max-h-32 rounded-md object-contain mr-3 w-full cursor-pointer transition-transform duration-300 hover:transition-transform hover:scale-125 hover:opacity-70"
              src={`${process.env.REACT_APP_API_MOVIE_PICTURE}/${movie?.backdrop_path || movie?.poster_path}`}
              alt={movie?.name || movie?.title || movie?.original_name} 
              // onMouseOver={() => handleHover(true, movie?.id)} onMouseOut={() => handleHover(false, movie?.id)}
            />         
            
          
        ))}
      </div>
    </div>
  );
}
{/* <div className="max-h-32 w-full cursor-pointer">
              <span className="text-center font-semibold w-60 left-0" key={`a${movie?.id}`}>
                {isHover.hover && isHover.id === movie.id && (movie?.name || movie?.title || movie?.original_name)}
              </span>
            </div> */}
export default ListMovies