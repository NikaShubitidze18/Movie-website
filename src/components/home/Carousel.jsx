import React, { useEffect, useState } from "react";
import { getPopularMovies } from "../../api"; // Adjust path if necessary
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./carousel.css"; // Import CSS file

function Carousel() {
  const [movies, setMovies] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    if (movies.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [movies]);

  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-title text-center mb-4">
        <h2>რჩეული ფილმები</h2>
      </div>

      <div className="carousel-indicators">
        {movies.map((movie, index) => (
          <button
            key={movie.id}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={index}
            className={index === activeIndex ? "active" : ""}
            aria-current={index === activeIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {movies.map((movie, index) => (
          <div key={movie.id} className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              className="d-block w-100"
              alt={movie.title}
              style={{ height: "40vh", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>{movie.title}</h5>
              <p>{movie.overview.length > 100 ? `${movie.overview.slice(0, 100)}...` : movie.overview}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        onClick={() => setActiveIndex((prevIndex) => (prevIndex === 0 ? movies.length - 1 : prevIndex - 1))}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={() => setActiveIndex((prevIndex) => (prevIndex + 1) % movies.length)}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;

