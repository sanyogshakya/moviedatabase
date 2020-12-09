import React from 'react';
import MovieList from '../components/MovieList';
import Searchbar from '../components/Searchbar';
const Home = () => {
  return (
    <div className="section-center">
      <Searchbar />
      <MovieList />
    </div>
  );
};

export default Home;
