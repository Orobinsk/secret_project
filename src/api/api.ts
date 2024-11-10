import { IPersonDetailsResults } from '../types/personTypes';
import { IMovieDiscover } from '../types/movieTypes';
import { IGetGenres, IGetGenresParams } from './apiTypes/apiGenresTypes';
import {
  IGetPersonParams,
  IPersonEndpointTypeMap,
  TPersonEndpoint,
} from './apiTypes/apiPersonTypes';
import { ISearchParams, TSearchEndpoint, TSearchResponse } from './apiTypes/apiSearchTypes';
import {
  IGetMoviesListParams,
  IResponseList,
  IGetMovieParams,
  IMovieEndpointTypeMap,
  IImageConfig,
  GetMovieResponse,
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

export async function getMovie<E extends keyof IMovieEndpointTypeMap | undefined = undefined>({
  id,
  endpoint,
  params,
}: IGetMovieParams & { endpoint?: E }): Promise<GetMovieResponse<E>> {
  const currentEndpoint = `movie/${id}${endpoint ? `/${endpoint}` : ''}`;

  try {
    const response = await apiTMDB.get<GetMovieResponse<E>>(currentEndpoint, {
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

export async function getPerson(id: IGetPersonParams): Promise<IPersonDetailsResults>;
export async function getPerson<E extends TPersonEndpoint>({
  id,
  endpoint,
  params,
}: IGetPersonParams): Promise<IPersonEndpointTypeMap[E]>;

export async function getPerson<E extends TPersonEndpoint>({
  id,
  endpoint,
  params,
}: IGetPersonParams): Promise<IPersonEndpointTypeMap[E]> {
  const currentEndpoint = `person/${id}${endpoint ? `/${endpoint}` : ''}`;

  try {
    const response = await apiTMDB.get<IPersonEndpointTypeMap[E]>(currentEndpoint, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
