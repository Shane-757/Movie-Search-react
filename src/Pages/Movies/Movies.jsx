import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = useCallback(async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: '64ac679b39866e67efda72c4a9b2c64c',
          query: keyword
        }
      });
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  }, [keyword]);

  useEffect(() => {
    if (keyword) {
      handleSearch();
    }
  }, [keyword, handleSearch]);

  return (
    <div>
      <div className="centeredContent">
        <h2>Movie Search</h2>
        <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul>
        {searchResults.length > 0 ? (
          searchResults.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} /> {/* Add this line */}
                {movie.title}
              </Link>
            </li>
          ))
        ) : (
          <p>No movies found with this title</p>
        )}
      </ul>
    </div>
  );
};


export default Movies;