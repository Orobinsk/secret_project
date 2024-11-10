import {
  IReviewDetails,
  ICredits,
  IImage,
  ILists,
  IMovieDiscover,
  IRelease,
  ITrailerResponse,
  MovieDetails,
} from '../../types/movieTypes';

export interface IResponseList<T> {
  page: number;
  results: T;
  total_results: number;
  total_pages: number;
}
export interface IMovieEndpointTypeMap {
  reviews: IResponseList<IReviewDetails[]>;
  credits: ICredits;
  release_dates: IRelease;
  images: IImage[];
  lists: ILists;
  upcoming: IResponseList<IMovieDiscover[]>;
  videos: ITrailerResponse;
}

export type TMovieEndpoint = keyof IMovieEndpointTypeMap;

export interface IGetMoviesListParams {
  params?: { [key: string]: number | string | null };
}

export interface IGetMovieParams extends IGetMoviesListParams {
  id: number | string;
  endpoint?: TMovieEndpoint;
}

export type GetMovieResponse<E extends keyof IMovieEndpointTypeMap | undefined> =
  E extends keyof IMovieEndpointTypeMap ? IMovieEndpointTypeMap[E] : MovieDetails;

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
