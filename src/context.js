import React, { useState, useContext, useEffect, useCallback } from 'react';
import apikey from './private/apikey';

const url = 'http://www.omdbapi.com/?s=';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('avengers');
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState('');
  const [error, setError] = useState('');

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}${apikey}`);
      const data = await response.json();

      const resultMovies = data.Search;

      if (resultMovies) {
        const newMovies = resultMovies.map((item) => {
          const { Title, Year, imdbID, Type, Poster } = item;
          return {
            title: Title,
            year: Year,
            id: imdbID,
            type: Type,
            poster: Poster,
          };
        });
        setMovies(newMovies);
        setError('');
        setTotalResults(data.totalResults);
      } else {
        setMovies([]);
        setError(data.Error);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchData();
  }, [searchTerm, fetchData]);

  return (
    <AppContext.Provider
      value={{
        loading,
        movies,
        setSearchTerm,
        totalResults,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
