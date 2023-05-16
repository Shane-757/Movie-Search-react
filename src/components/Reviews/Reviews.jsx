import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, {
          params: {
            api_key: '64ac679b39866e67efda72c4a9b2c64c'
          }
        });
        setReviews(reviewsResponse.data.results);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>{review.author}</p>
          <p>{review.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;