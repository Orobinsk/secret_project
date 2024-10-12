import {
  IGetMoviesListParams,
  TEndpoint,
  IResponseList,
  IMovie,
  IGetMovieParams,
  IEndpointTypeMap,
  MovieDetails,
} from './apiTypes';
import { apiTMDB } from './base';

//схема - https://developer.themoviedb.org/reference/discover-movie
export async function getMovieList({ params }: IGetMoviesListParams = {}): Promise<
  IResponseList<IMovie[]>
> {
  try {
    const response = await apiTMDB.get<IResponseList<IMovie[]>>('discover/movie', {
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
export async function getMovie<E extends TEndpoint>({
  id,
  endpoint,
  params,
}: IGetMovieParams): Promise<IEndpointTypeMap[E]>;

export async function getMovie<E extends TEndpoint>({
  id,
  endpoint,
  params,
}: IGetMovieParams): Promise<IEndpointTypeMap[E]> {
  const currentEndpoint = `movie/${id}${endpoint ? `/${endpoint}` : ''}`;

  try {
    const response = await apiTMDB.get<IEndpointTypeMap[E]>(currentEndpoint, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
