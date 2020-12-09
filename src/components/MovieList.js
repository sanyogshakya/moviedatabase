import React from 'react';
import Movie from './Movie';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const MovieList = () => {
  const { movies, loading, totalResults, error } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    if (error === 'Incorrect IMDb ID.') {
      return (
        <section className="movie-list-container">
          <h2 className="section-title">Movies</h2>
        </section>
      );
    }
    return (
      <section className="movie-list-container">
        <h2 className="section-title">Movies</h2>
        <h3>{error}</h3>
      </section>
    );
  }

  return (
    <section className="movie-list-section">
      <h2 className="section-title">Movies</h2>
      <p>Total Results: {totalResults}, Showing: 10</p>
      <div className="movie-container">
        {movies.map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })}
      </div>
    </section>
  );
};

export default MovieList;
