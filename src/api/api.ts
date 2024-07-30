import { apiTMDB } from './base';

export interface ITmdbServerResponse {
  page: number;
  results: Array<IMovie>;
  total_pages: number;
  total_results: number;
}

interface IMovie {
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

export async function getMoviesList(params?: any): Promise<ITmdbServerResponse> {
  try {
    const response = await apiTMDB.get<ITmdbServerResponse>('movie/popular', { params });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error; // Используем throw для того, чтобы ошибка могла быть поймана вызывающим кодом
  }
}
