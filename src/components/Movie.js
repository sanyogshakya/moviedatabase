import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ id, title, year, type, poster }) => {
  return (
    <div className="movie-card">
      <div className="overlay-container">
        <img src={poster} alt={title} />
        <div className="overlay">
          <Link to={`/movie/${id}`} className="btn btn-details">
            details
          </Link>
        </div>
      </div>
      <div className="card-info-container">
        <p className="card-title">
          {title.length > 45 ? `${title.slice(0, 45)}...` : title}
        </p>
        <div className="year-type">
          <p>{year}</p>
          <p className="static-btn">{type}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
