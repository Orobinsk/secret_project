import { IResponseList } from '../api/apiTypes/apiTypes';

//discover
export interface IMovieDiscover {
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

//movie
export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: string;
  budget: number;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  imdb_id: string;
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
  reviews?: IResponseList<IReviewDetails[]>;
  credits?: ICredits;
  release_dates?: IRelease;
  images?: IImage;
  lists?: IResponseList<ILists[]>;
  videos?: ITrailerResponse;
}

export interface IReviewDetails {
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

export interface ICredits {
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

export interface IImage {
  backdrops: IBackdrops[];
  logos: ILogos[];
  posters: IPoster[];
  id: number;
}
export interface IBackdrops {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}
export interface ILogos {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}
export interface IPoster {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface ILists {
  results: IResults[];
}
export interface IResults {
  description: string;
  favorite_count: number;
  id: number;
  item_count: number;
  iso_639_1: string;
  list_type: string;
  name: string;
  poster_path: string;
}

export interface ITrailer {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export interface ITrailerResponse {
  id: number;
  results: ITrailer[];
}
