import { IMovieDiscover, MovieDetails } from '../types/movieTypes';
import { IGetGenres, IGetGenresParams } from './apiTypes/apiGenresTypes';
import { ISearchParams, TSearchEndpoint, TSearchResponse } from './apiTypes/apiSearchTypes';
import {
  IGetMoviesListParams,
  TMovieEndpoint,
  IResponseList,
  IGetMovieParams,
  IMovieEndpointTypeMap,
  IImageConfig,
} from './apiTypes/apiTypes';
import { apiTMDB } from './base';

//схема - https://developer.themoviedb.org/reference/discover-movie
export async function getMovieList({ params }: IGetMoviesListParams = {}): Promise<
  IResponseList<IMovieDiscover[]>
> {
  try {
    const response = await apiTMDB.get<IResponseList<IMovieDiscover[]>>('discover/movie', {
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

//схема - https://developer.themoviedb.org/reference/movie-details
// Перегрузка функции. Применена потому что нужно получать разные типы с эндпоинтом и без
export async function getMovie(id: IGetMovieParams): Promise<MovieDetails>;
export async function getMovie<E extends TMovieEndpoint>({
  id,
  endpoint,
  params,
}: IGetMovieParams): Promise<IMovieEndpointTypeMap[E]>;

export async function getMovie<E extends TMovieEndpoint>({
  id,
  endpoint,
  params,
}: IGetMovieParams): Promise<IMovieEndpointTypeMap[E]> {
  const currentEndpoint = `movie/${id}${endpoint ? `/${endpoint}` : ''}`;

  try {
    const response = await apiTMDB.get<IMovieEndpointTypeMap[E]>(currentEndpoint, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getSearch<E extends TSearchEndpoint>({
  endpoint,
  params,
}: ISearchParams<E>): Promise<TSearchResponse<E>> {
  const currentEndpoint = `search/${endpoint}`;

  try {
    const response = await apiTMDB.get<TSearchResponse<E>>(currentEndpoint, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

//схема - https://developer.themoviedb.org/reference/configuration-details
export async function getImageConfig(): Promise<IImageConfig> {
  try {
    const response = await apiTMDB.get<IImageConfig>('configuration');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

//TODO исправить типы для getMovieList и getMovie по типу getSearch

export async function getGenres({ params }: IGetGenresParams = {}): Promise<IGetGenres> {
  try {
    const response = await apiTMDB.get<IGetGenres>('/genre/movie/list', {
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
