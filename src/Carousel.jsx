import React, { useEffect, useState } from "react";
import { getPopularMovies } from "./api"; // Adjust path if necessary
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

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

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (movies.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % movies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [movies]);

  const handleNextPage = () => {
    window.location.href = "/nextpage"; // Navigate to the next page
  };

  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      {/* Title */}
      <div className="carousel-title text-center mb-4">
        <h2>რჩეული ფილმები</h2> {/* Title text */}
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
            onClick={() => setActiveIndex(index)} // Manual control
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
              style={{
                height: "40vh", // Set height to 40% of viewport height
                objectFit: "cover", // Ensure the image covers the container area
              }}
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

      {/* Navigation Button Below the Carousel */}
      <div className="text-center mt-4">
        <button className="btn btn-primary" href="NextPage.jsx" onClick={handleNextPage}>
          შემდეგი გვერდი
        </button>
      </div>
    </div>
  );
}

export default Carousel;
