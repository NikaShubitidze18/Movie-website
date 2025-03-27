import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { getPopularMovies } from "../../api";
import "./card.css";

function CardComponent() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the page number from the URL params
  const queryParams = new URLSearchParams(location.search);
  const page = queryParams.get("page") || 1; // Default to 1 if no page is specified

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        console.log(`Fetching movies for page ${page}`);
        
        const movieData = await getPopularMovies(page);
        
        if (movieData.length === 0) {
          setError("No movies found");
        } else {
          setMovies(movieData);
        }
        
        console.log("Fetched Movies:", movieData); // Debugging - Print out the fetched data
      } catch (err) {
        console.error("Error fetching movies:", err); // Log the error for debugging
        setError("Error fetching movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [page]);

  const handlePageChange = (pageNum) => {
    navigate(`/movies?page=${pageNum}`);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top after page change
  };

  if (loading) {
    return <div className="container mt-4 text-center"><p>Loading movies...</p></div>;
  }

  if (error) {
    return <div className="container mt-4 text-center"><p>{error}</p></div>;
  }

  return (
    <div className="container mt-4">
      <div className="row d-flex justify-content-center">
        {movies.map((movie) => (
          <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card" style={{ width: "18rem", height: "auto" }}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top"
                alt={movie.title}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body" style={{ height: "300px", overflow: "hidden" }}>
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

      {/* Page navigation buttons */}
      <div className="text-center mt-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((pageNum) => (
          <button
            key={pageNum}
            className={`btn ${page == pageNum ? " text-white" : "btn-outline-primary"} mx-2 px-3 py-2`}
            style={{
              borderRadius: "50px",
              fontSize: "18px",
              fontWeight: "bold",
              transition: "0.3s",
            }}
            onClick={() => handlePageChange(pageNum)}
          >
            {pageNum}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CardComponent;
