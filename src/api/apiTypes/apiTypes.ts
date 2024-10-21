import { IAuthorDetails, ICredits, IImage, ILists, IRelease } from '../../types/movieTypes';

export interface IResponseList<T> {
  page: number;
  results: T;
  total_results: number;
  total_pages: number;
}
export interface IMovieEndpointTypeMap {
  reviews: IResponseList<IAuthorDetails[]>;
  credits: ICredits;
  release_dates: IRelease;
  images: IImage[];
  lists?: ILists;
}

export type TMovieEndpoint = 'release_dates' | 'credits' | 'reviews' | 'images' | 'lists';

export interface IGetMoviesListParams {
  params?: { [key: string]: number | string };
}

export interface IGetMovieParams extends IGetMoviesListParams {
  id: number | string;
  endpoint?: TMovieEndpoint;
}
