import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';

const url = 'http://www.omdbapi.com/?i=';
const key = '&apikey=90b314c4';

const SingleMovie = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});

  const fetchDetails = React.useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${id}${key}`);
      const detailsResult = await response.json();
      setMovie(detailsResult);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="movie-details-section">
      <div className="single-movie-container">
        <h2 className="movie-title">{movie.Title}</h2>
        <div className="details-container">
          <div>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="movie-details">
            <h4>{movie.Type}</h4>
            <p>
              <span>ReleaseDate: </span>
              {movie.Released}
            </p>
            <p>
              <span>Genre: </span>
              {movie.Genre}
            </p>
            <p>
              <span>Languages: </span>
              {movie.Language}
            </p>
            <p>
              <span>Director: </span>
              {movie.Director}
            </p>
            <p>
              <span>Actors: </span>
              {movie.Actors}
            </p>
            <p>
              <span>Plot: </span>
              {movie.Plot}
            </p>
            <p>
              <span>Rating: </span>
              {movie.imdbRating}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
