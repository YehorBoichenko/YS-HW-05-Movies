import {PageHeading} from '../components/PageHeading/PageHeading';
import React, { useState, useEffect } from 'react';
import { fetchTrendsMovies } from '../API/MoviesApi';
import {MoviesGallery} from '../components/MoviesGallery/MoviesGallery';
import { IData } from '../interfaces';
import { mapper } from '../utils/mapper';

 const HomePage = (): JSX.Element => {
  const [movies, setMovies] = useState<Partial<IData>[]>([]);
  useEffect(():void => {
    fetchTrendsMovies().then(( {data}  ) => setMovies(mapper(data)))
  }, []);
  return (
    <>
      <PageHeading text="Trending movies" />
      {movies && <MoviesGallery movies={movies} />}
    </>
  );
};
export default HomePage