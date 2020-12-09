import React from 'react';
import { useGlobalContext } from '../context';

function Searchbar() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef('');

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchMovie = () => {
    setSearchTerm(searchValue.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-section">
      <form className="searchbar" onSubmit={handleSubmit}>
        <label htmlFor="title">Search For Your Fav Movie</label>
        <input
          type="text"
          id="title"
          ref={searchValue}
          onChange={searchMovie}
        />
      </form>
    </div>
  );
}

export default Searchbar;
