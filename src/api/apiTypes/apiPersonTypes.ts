import {
  IChange,
  ICombinedCredits,
  ImagesResults,
  IMovieCreditsResponse,
  IPersonDetailsResults,
  ITvResponse,
} from '../../types/personTypes';

export interface IGetPersonParams {
  id: number;
  endpoint?: TPersonEndpoint;
  params?: { [key: string]: string };
}
export type IPersonEndpointTypeMap = {
  changes: IChange[];
  combined_credits: ICombinedCredits;
  external_ids: Record<string, string>;
  images: ImagesResults;
  latest: IPersonDetailsResults;
  movie_credits: IMovieCreditsResponse;
  tv_credits: ITvResponse;
  tagged_images: ImagesResults;
};
export const PERSON_ENDPOINTS = {
  CHANGES: 'changes',
  COMBINED_CREDITS: 'combined_credits',
  EXTERNAL_IDS: 'external_ids',
  IMAGES: 'images',
  LATEST: 'latest',
  MOVIE_CREDITS: 'movie_credits',
  TV_CREDITS: 'tv_credits',
  TAGGED_IMAGES: 'tagged_images',
  TRANSLATIONS: 'translations',
};

export type TPersonEndpoint = keyof IPersonEndpointTypeMap;
