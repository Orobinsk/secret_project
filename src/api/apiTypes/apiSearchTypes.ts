import { IMovieDiscover } from '../../types/movieTypes';
import {
  ICollection,
  ICompany,
  IKeyword,
  ISearchMulti,
  ISearchPerson,
  ISearchTv,
} from '../../types/searchTypes';
import { IResponseList } from './apiTypes';

export interface ISearchParams<E extends TSearchEndpoint> {
  endpoint: E;
  params: TSearchParams<E>;
}

export type TSearchEndpoint =
  | 'collection'
  | 'company'
  | 'keyword'
  | 'movie'
  | 'multi'
  | 'person'
  | 'tv';

type SearchParamsMap = {
  collection: {
    query: string;
    include_adult?: boolean;
    language?: string;
    page?: number;
    region?: string;
  };
  company: {
    query: string;
    page?: number;
  };
  keyword: {
    query: string;
    page?: number;
  };
  movie: {
    query: string;
    include_adult?: boolean;
    language?: string;
    primary_release_year?: number;
    page?: number;
    region?: string;
    year?: number;
  };
  multi: {
    query: string;
    include_adult?: boolean;
    language?: string;
    page?: number;
  };
  person: {
    query: string;
    include_adult?: boolean;
    language?: string;
    page?: number;
  };
  tv: {
    query: string;
    first_air_date_year?: number;
    include_adult?: boolean;
    language?: string;
    page?: number;
  };
};

// Тип для параметров поиска в зависимости от эндпоинта
export type TSearchParams<E extends keyof SearchParamsMap> = SearchParamsMap[E];

// Определяем типы ответов для каждого эндпоинта
type TSearchResponseMap = {
  movie: IResponseList<IMovieDiscover[]>;
  collection: IResponseList<ICollection[]>;
  company: IResponseList<ICompany[]>;
  keyword: IResponseList<IKeyword[]>;
  multi: IResponseList<ISearchMulti[]>;
  person: IResponseList<ISearchPerson[]>;
  tv: IResponseList<ISearchTv[]>;
};

// Тип для ответа на запрос поиска в зависимости от эндпоинта
export type TSearchResponse<E extends keyof TSearchResponseMap> = TSearchResponseMap[E];
