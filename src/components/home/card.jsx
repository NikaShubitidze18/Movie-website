import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getPopularMovies } from '../../api';
import "./card.css";

function CardComponent() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movieData = await getPopularMovies();
        setMovies(movieData);
        setLoading(false); // Stop loading after data is fetched
      } catch (err) {
        setError("Error fetching movies. Please try again later.");
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return (
      <div className="container mt-4">
        <p>Loading movies...</p> {/* You can show a loading spinner here */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-4">
        <p>{error}</p> {/* Display error message */}
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row d-flex justify-content-center">
        {movies.map((movie) => (
          <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card" style={{ width: '18rem', height: 'auto' }}>
              <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                className="card-img-top" 
                alt={movie.title} 
                style={{ height: '300px', objectFit: 'cover' }} 
              />
              <div className="card-body" style={{ height: '300px', overflow: 'hidden' }}>
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">
                  {movie.overview.length > 100 ? `${movie.overview.slice(0, 100)}...` : movie.overview}
                </p>
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

      {/* Button to navigate to the next page */}
      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={() => navigate("/nextpage")}>
          შემდეგი გვერდი
        </button>
      </div>
    </div>
  );
}

export default CardComponent;
