const API_KEY = "8872fb52023d01017835172a06cce8be"; 
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async (page = 1) => { // default page = 1
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
    const data = await response.json();
    return data.results;
};
