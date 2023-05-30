import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
          params: {
            api_key: '64ac679b39866e67efda72c4a9b2c64c'
          }
        });
        setCast(castResponse.data.cast);
      } catch (error) {
        console.error('Error fetching cast:', error);
      }
    };

    fetchCast();
  }, [movieId]);

 return (
    <div className="Cast">
      <h2 className="centeredContent">Cast</h2>
      {cast.length > 0 ? (
        <ul>
          {cast.map((actor) => (
            <li key={actor.id}>
              <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
              <Link to={`/actor/${actor.id}`}>{actor.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading cast...</p>
      )}
    </div>
  );
};

export default Cast;