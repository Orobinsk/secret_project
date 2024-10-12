export interface IResponseList<T> {
  page: number;
  results: T;
  total_results: number;
  total_pages: number;
}
export interface IEndpointTypeMap {
  reviews: IResponseList<IAuthorDetails[]>;
  credits: ICredits;
  release_dates: IRelease;
}

export type TEndpoint = 'release_dates' | 'credits' | 'reviews';

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: string;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage?: string;
  imdb_id?: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path?: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline?: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;

  // эти поля приходят при использовании параметра append
  reviews?: IResponseList<IAuthorDetails[]>;
  credits?: ICredits;
  release_dates?: IRelease;
}
export interface IRelease {
  results: IReleaseDates[];
}

export interface IReleaseDates {
  iso_3166_1: string;
  release_dates: IReleaseDetail[];
}

export interface IReleaseDetail {
  certification: string;
  descriptors: string[];
  iso_639_1: string;
  note: string;
  release_date: string;
  type: number;
}
export interface IAuthorDetails {
  author: string;
  author_details: IDetails;
  content: string;
  created_at: string;
  updated_at: string;
  id: string;
  url: string;
}
export interface IDetails {
  avatar_path: null;
  name: string;
  rating: number;
  username: string;
}

interface ICredits {
  id: number;
  cast: CastMember[];
  crew: CrewMember[];
}

interface CastMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

interface CrewMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
}

export interface IGetMoviesListParams {
  params?: { [key: string]: number | string };
}

export interface IGetMovieParams extends IGetMoviesListParams {
  id: number | string;
  endpoint?: TEndpoint;
}

// слишком много типов тут выходит. нужно разделить
