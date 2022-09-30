import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as fetchAPI from '../../API/MoviesApi';
import styles from '../Reviews/Reviews.module.css';

export const Reviews = (): JSX.Element => {
  const [results, setReviews] = useState<{reviews: {id:number, author: string, content:string}[]}>();
  const { movieId } = useParams<string>();

  useEffect(() => {
    fetchAPI.fetchMoviesByReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      <ul>
        {results && results.reviews.length > 0 ? (
          results.reviews.map(result => (
            <li key={result.id} className={styles.reviewCard}>
              <div className={styles.imagesSection}>
                <b>{result.author}:</b>
                <p>{result.content}</p>
              </div>
            </li>
          ))
        ) : (
          <b>No reviews yet!</b>
        )}
      </ul>
    </>
  );
};
