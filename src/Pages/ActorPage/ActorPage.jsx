import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import axios from 'axios';

const ActorPage = () => {
  const { actorId } = useParams();
  const [actorDetails, setActorDetails] = useState(null);

  useEffect(() => {
  const fetchActorDetails = async () => {
    try {
      const actorDetailsResponse = await axios.get(`https://api.themoviedb.org/3/person/${actorId}`, {
        params: {
          api_key: '64ac679b39866e67efda72c4a9b2c64c',
          append_to_response: 'movie_credits'
        }
      });
      setActorDetails(actorDetailsResponse.data);
    } catch (error) {
      console.error('Error fetching actor details:', error);
    }
  };

  fetchActorDetails();
}, [actorId]);

  if (!actorDetails) {
    return <p>Loading actor details...</p>;
  }

  return (
  <div>
    <h2>{actorDetails.name}</h2>
    <img src={`https://image.tmdb.org/t/p/w200${actorDetails.profile_path}`} alt={actorDetails.name} />
    <p>{actorDetails.biography}</p> 
    <p>Birthplace: {actorDetails.place_of_birth}</p> 
    <h3>Movies:</h3>
    <ul>
      {actorDetails.movie_credits.cast.map((movie) => (
        <li key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);
};

export default ActorPage;