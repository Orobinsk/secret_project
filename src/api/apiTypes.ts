export interface ISearchResult<T> {
  title: ReactNode;
  page: number;
  results: T;
  total_results: number;
  total_pages: number;
}
export type EndpointTypeMap = {
  '/popular': IMovie[];
};

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

export type TEndpoint = keyof EndpointTypeMap;

export interface IGetMoviesListParams {
  endpoint?: string;
  params?: any;
}
