import React,{ useState, useEffect } from 'react';
import { fetchCast } from '../../API/MoviesApi';
import styles from '../Cast/Cast.module.css';
import { useParams } from 'react-router-dom';
import {ICast} from '../../interfaces'

// import photo from '../../images/NotFound.png';
export const Cast = (): JSX.Element => {
  const [credits, setCredits] = useState<{cast:Partial<ICast>[]}>();
  const { movieId } = useParams();
  useEffect(() => {
fetchCast(movieId).then(({data}) => setCredits(data))
  },[movieId])

    return (<>{ credits && <ul className={styles.cast}>
      {credits.cast && credits.cast.length > 0 ? (
        credits.cast.map(({ id, profile_path, name, character }) => (
          <li key={id} className={styles.Castitem}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300${profile_path}`
                  : `https://i.gifer.com/origin/3f/3fcf565ccc553afcfd89858c97304705.gif`
              }
              alt={name}
              className={styles.Castphoto}
            />
            <p>{styles.Castname}</p>
            <p>{styles.Moviecharacter}</p>
          </li>
        ))
      ) : (
        <b>Nothing was found!</b>
      )}
    </ul> }</>)

};
