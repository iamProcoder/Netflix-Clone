const all_movies_requests = {
    getNetflix_Trending: `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    getNetflix_Originals: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`,
    getNetflix_TopRated: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
    getNetflix_Actions: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
    getNetflix_Comedy: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
    getNetflix_Fear: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
    getNetflix_Romance: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
    getNetflix_Documentaries: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
};

export default all_movies_requests;