export const MOVIE_ENDPOINTS = {
  RELEASE_DATES: 'release_dates',
  CREDITS: 'credits',
  REVIEW: 'reviews',
  IMAGES: 'images',
  LISTS: 'lists',
  VIDEOS: 'videos',
} as const;

export enum SORT_BY_OPTIONS {
  ORIGINAL_TITLE_ASC = 'original_title.asc',
  ORIGINAL_TITLE_DESC = 'original_title.desc',
  POPULARITY_ASC = 'popularity.asc',
  POPULARITY_DESC = 'popularity.desc',
  REVENUE_ASC = 'revenue.asc',
  REVENUE_DESC = 'revenue.desc',
  PRIMARY_RELEASE_DATE_ASC = 'primary_release_date.asc',
  PRIMARY_RELEASE_DATE_DESC = 'primary_release_date.desc',
  TITLE_ASC = 'title.asc',
  TITLE_DESC = 'title.desc',
  VOTE_AVERAGE_ASC = 'vote_average.asc',
  VOTE_AVERAGE_DESC = 'vote_average.desc',
  VOTE_COUNT_ASC = 'vote_count.asc',
  VOTE_COUNT_DESC = 'vote_count.desc',
  WITH_GENRES = 'with_genres',
}
export const SORT_BY = [
  { label: 'Popularity ▲', value: SORT_BY_OPTIONS.POPULARITY_DESC },
  { label: 'Popularity ▼', value: SORT_BY_OPTIONS.POPULARITY_ASC },
  { label: 'Film Name ▲', value: SORT_BY_OPTIONS.TITLE_DESC },
  { label: 'Film Name ▼', value: SORT_BY_OPTIONS.TITLE_ASC },
  { label: 'Release Date ▲', value: SORT_BY_OPTIONS.PRIMARY_RELEASE_DATE_DESC },
  { label: 'Release Date ▼', value: SORT_BY_OPTIONS.PRIMARY_RELEASE_DATE_ASC },
  { label: 'Rating ▲', value: SORT_BY_OPTIONS.VOTE_AVERAGE_DESC },
  { label: 'Rating ▼ ', value: SORT_BY_OPTIONS.VOTE_AVERAGE_ASC },
  { label: 'Duration ▲', value: SORT_BY_OPTIONS.REVENUE_DESC },
  { label: 'Duration ▼', value: SORT_BY_OPTIONS.REVENUE_ASC },
];

export const API_MOVIE_LIST_PARAMS = {
  PRIMARY_RELEASE_DATE: 'primary_release_date.gte',
  SORT_BY: 'sort_by',
  PAGE: 'page',
  YEAR: 'year',
  WITH_GENRES: 'with_genres',
} as const;

export const API_PARAMS = {
  PAGE: 'page',
  APPEND: 'append_to_response',
  LANGUAGE: 'language',
};

export const LANGUAGE = {
  EN: 'en,',
};
export const API_SEARCH_ENDPOINTS = {
  MOVIE: 'movie',
  COLLECTION: 'collection',
  COMPANY: 'company',
  KEYWORD: 'keyword',
  PERSON: 'person',
  TV: 'tv',
} as const;

export const API_SEARCH_PARAMS = {
  QUERY: 'query',
  INCLUDE_ADULT: 'include_adult',
  LANGUAGE: 'language',
  PAGE: 'page',
  REGION: 'region',
  PRIMARY_RELEASE_YEAR: 'primary_release_year',
  YEAR: 'year',
  FIRST_AIR_DATE_YEAR: 'first_air_date_year',
} as const;

export const imageSizes = {
  verySmall: 'w92',
  small: 'w185',
  medium: 'w300',
  high: 'w500',
  veryHigh: 'w780',
  original: 'original',
};
