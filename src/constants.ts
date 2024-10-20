export const MOVIE_ENDPOINTS = {
  RELEASE_DATES: 'release_dates',
  CREDITS: 'credits',
  REVIEW: 'reviews',
  IMAGES: 'images',
  LISTS: 'lists',
};

export const API_PARAMS = {
  PAGE: 'page',
  APPEND: 'append_to_response',
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
