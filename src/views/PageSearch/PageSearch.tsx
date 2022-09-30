import React,{ useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {fetchSearchMovies} from '../../API/MoviesApi';
import {SearchMovies} from "../../components/SearchMovies/SearchMovies";
import { MoviesGallery } from '../../components/MoviesGallery/MoviesGallery';
import { IData } from '../../interfaces';
import { mapper } from '../../utils/mapper';

 const  PageSearch =():JSX.Element => {
  const [movies, setMovies] = useState<Partial<IData>[] | null >(null);
  const searchParam = useSearchParams();
  const [query, setQuery] = useState(() => searchParam[0].get('query') ?? '');
  const navigate = useNavigate();
  // const location = useLocation();

  useEffect(() => {
    query && getMovies();
  });
  const getMovies = () => {
   fetchSearchMovies(query).then(({ data }) => {
      if (data?.length === 0) {
        toast.error(`There are is no results found.Please try another request`);
        return;
      }
      setMovies(mapper(data));
    });
  };

  const onSubmit = (query: string) => {
    setQuery(query);
    navigate({ search: `?query=${query}` });
  };

  return (
    <>
      <SearchMovies onSubmit={onSubmit}  />
      {movies && <MoviesGallery movies={movies}  />}
    </>
  );
}

export default PageSearch