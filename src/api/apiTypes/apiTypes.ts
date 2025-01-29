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
import {
  IAccountStates,
  IAggregateCredits,
  IAlternativeTitles,
  IChanges,
  IContentRatings,
  IImages,
  SeriesDetails,
} from '../../types/seriesTypes';

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

export type GetSeriesResponse<E extends keyof ISeriesEndpointTypeMap | undefined> =
  E extends keyof ISeriesEndpointTypeMap ? ISeriesEndpointTypeMap[E] : SeriesDetails;

export interface ISeriesEndpointTypeMap {
  account_states?: IAccountStates;
  aggregate_credits?: IAggregateCredits;
  alternative_titles?: IAlternativeTitles;
  changes?: IChanges;
  content_ratings?: IContentRatings;
  credits?: ICredits;
  images?: IImages;
}
