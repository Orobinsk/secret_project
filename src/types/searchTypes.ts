import { IMovieDiscover } from './movieTypes';

export interface ICollection {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
}

export interface ICompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface IKeyword {
  id: number;
  name: string;
}

// универсальный тип для фильмов и сериалов
export interface ISearchMulti {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  title?: string; // Название для фильмов
  name?: string; // Название для сериалов
  original_language: string;
  original_title?: string; // Оригинальное название для фильмов
  original_name?: string; // Оригинальное название для сериалов
  overview: string;
  poster_path: string | null;
  media_type: 'movie' | 'tv';
  genre_ids: number[];
  popularity: number;
  release_date?: string; // Дата выхода для фильмов
  first_air_date?: string; // Дата первого выхода для сериалов
  video: boolean;
  vote_average: number;
  vote_count: number;
  origin_country?: string[]; // Страны производства для сериалов
}

export interface ISearchPerson {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  known_for: IMovieDiscover[];
}

export interface ISearchTv {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
}
