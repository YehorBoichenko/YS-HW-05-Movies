import axios, { AxiosResponse } from 'axios';
import { ICast, IData } from '../interfaces';
const API_KEY = '74df5c4b3da0f8bb23d044877e91bb86';
const API_URL_SEARCH = 'https://api.themoviedb.org/3/';

export const fetchTrendsMovies = (): Promise<AxiosResponse<{ length: number;result: Partial<IData>[]}>>=> {
  return axios
    .get(
      `${API_URL_SEARCH}trending/movie/week?api_key=${API_KEY}&page=1`
    )
    .then(({ data }) => data)
    .catch(error => error);
}

export const fetchSearchMovies =(searchInput?: string):Promise<AxiosResponse<{
  length: number;
  result: Partial<IData>[]
}>>=>{
  return axios
    .get(
      `${API_URL_SEARCH}search/movie?api_key=${API_KEY}&language=en-US&&page=1&include_adult=false&query=${searchInput}`
    )
    .then(({ data }) => data)
    .catch(error => error);
}

export const fetchMoviesId = (movieId?: string ): Promise<AxiosResponse<Partial<IData>>>=>{
  return axios
    .get(`${API_URL_SEARCH}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    .then(({ data }) => data)
    .catch(error => error);
}

export const fetchCast = (movieId?: string): Promise<AxiosResponse<{cast:Partial<ICast>[]}>> =>{
  return axios
    .get(
      `${API_URL_SEARCH}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    )
    .then(({ data }) => data.cast)
    .catch(error => error);
}

export const fetchMoviesByReviews = (movieId?: string)=> {
  return axios
    .get(
      `${API_URL_SEARCH}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then(({ data }) => data.results)
    .catch(error => error);
}
