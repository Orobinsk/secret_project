import {
  IAuthorDetails,
  ICredits,
  IImage,
  ILists,
  IMovieDiscover,
  IRelease,
} from '../../types/movieTypes';

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
  upcoming: IResponseList<IMovieDiscover[]>;
}

export type TMovieEndpoint =
  | 'release_dates'
  | 'credits'
  | 'reviews'
  | 'images'
  | 'lists'
  | 'upcoming';

export interface IGetMoviesListParams {
  params?: { [key: string]: number | string };
}

export interface IGetMovieParams extends IGetMoviesListParams {
  id: number | string;
  endpoint?: TMovieEndpoint;
}

export interface IImageConfig {
  images: {
    base_url: string;
    secure_base_url: string;
    backdrop_sizes: string[];
    logo_sizes: string[];
    poster_sizes: string[];
    profile_sizes: string[];
    still_sizes: string[];
  };
  change_keys: string[];
}
