import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [showComponent, setShowComponent] = useState(null);

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

    fetchMovieDetails();
  }, [movieId]);

  const handleClick = (component) => {
    setShowComponent(component);
  };

  return (
    <div>
      <h2>Movie Details</h2>
      {movieDetails ? (
        <div>
          <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} />
          <h3>{movieDetails.title}</h3>
          <p>User Score: {movieDetails.vote_average}</p>
          <p>Overview: {movieDetails.overview}</p>
          <p>Genres: {movieDetails.genres.map((genre) => genre.name).join(', ')}</p>
        </div>
      ) : (
        <p>Loading movie details...</p>
      )}
      <div>
        <h2>Additional Information</h2>
        <ul>
          <li><Link onClick={() => handleClick('cast')} to="#">Cast</Link></li>
          <li><Link onClick={() => handleClick('reviews')} to="#">Reviews</Link></li>
        </ul>
        {showComponent === 'cast' && <Cast />}
        {showComponent === 'reviews' && <Reviews />}
      </div>
    </div>
  );
};

export default MovieDetails;