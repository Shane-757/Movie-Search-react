import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const MovieDetails = ({ match }) => {
  const movieId = match.params.movieId;
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const detailsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
          params: {
            api_key: '64ac679b39866e67efda72c4a9b2c64c'
          }
        });
        setMovieDetails(detailsResponse.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    const fetchMovieCredits = async () => {
      try {
        const creditsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
          params: {
            api_key: '64ac679b39866e67efda72c4a9b2c64c'
          }
        });
        setMovieCredits(creditsResponse.data);
      } catch (error) {
        console.error('Error fetching movie credits:', error);
      }
    };

    fetchMovieDetails();
    fetchMovieCredits();
  }, [movieId]);

  return (
    <div>
      <h2>Movie Details</h2>
      {movieDetails && (
        <div>
          <h3>{movieDetails.title}</h3>
          <p>Release Date: {movieDetails.release_date}</p>
          <p>Overview: {movieDetails.overview}</p>
        </div>
      )}
      {movieCredits && (
        <div>
          <h3>Cast</h3>
          <ul>
            {movieCredits.cast.map((person) => (
              <li key={person.id}>{person.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string.isRequired
    })
  }).isRequired,
};

export default MovieDetails;