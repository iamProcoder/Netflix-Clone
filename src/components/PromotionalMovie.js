import React, { useState, useEffect } from 'react'
import BlackBackgroundScreen from "../assets/image/black_screen.png";
import {fetchMovie} from '../services/MovieService'
import {RandomCalc} from '../helpers';

const PromotionalMovie = () => {

  const [movie, setMovie] = useState([]);

  const TextTrim = (text, count) => {
    return text?.length > count ? `${text.substr(0, count - 1)}...` : text;
  };

  useEffect(() => {
    async function fetchData() {
      const movie_originals = await fetchMovie();
      setMovie(movie_originals.data.results[RandomCalc(movie_originals.data.results)]);
    }

    fetchData();
  }, []);

  return (    
    <header className="h-[32rem] relative text-white object-contain" style={{
      backgroundSize: "cover",
      backgroundImage: `url("${process.env.REACT_APP_API_MOVIE_PICTURE}/${movie?.backdrop_path || movie?.poster_path}")`,
      backgroundPosition: "center center"
    }}>
       <div className="ml-8 pt-36 h-48">
        <h1 className="text-5xl font-extrabold pb-1.5">{movie?.name || movie?.title || movie?.original_name}</h1>
        <div className="outline-none border-none mt-2">
          <button className="bg-white hover:bg-gray-300 text-gray-800 font-semibold py-1 px-2 mr-2 border border-gray-400 rounded shadow inline-flex items-center transition-all duration-300">
            <svg className="h-6 w-6 mr-1 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <polygon points="5 3 19 12 5 21 5 3" /></svg>
            <span>Play</span>
          </button>
          <button className="bg-gray-500 hover:bg-gray-400 text-white font-semibold py-1 px-2 border border-gray-500 rounded shadow inline-flex items-center transition-all duration-300">
            <svg className="h-6 w-6 mr-1 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="16" x2="12" y2="12" />  <line x1="12" y1="8" x2="12.01" y2="8" /></svg>
            <span>More Detail</span>
          </button>
        </div>
        <h1 className='w-96 max-xs:w-full leading-snug pt-4 font-semibold max-w-sm h-20'>
        {
          TextTrim(`${movie?.overview}`, 250)
        }
        </h1>
      </div>
    </header>
  )
}

export default PromotionalMovie