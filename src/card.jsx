import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { getPopularMovies } from './api'; // Import the API function

function CardComponent() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movieData = await getPopularMovies();
      setMovies(movieData); // Set the movie data to state
    };

    fetchMovies();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row d-flex justify-content-center">
        {movies.map((movie) => (
          <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card" style={{ width: '18rem', height: 'auto' }}>
              {/* Use the movie's image URL */}
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                className="card-img-top" 
                alt={movie.title} 
                style={{ height: '300px', objectFit: 'cover' }} // Ensure the image has a fixed height
              />
              <div className="card-body" style={{ height: '300px', overflow: 'hidden' }}>
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview.length > 100 ? `${movie.overview.slice(0, 100)}...` : movie.overview}</p>
                <p className="card-text">
                  <strong>Rating:</strong> {movie.vote_average} / 10
                </p>
                <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank" className="btn btn-primary">
                  ყურება
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardComponent;
