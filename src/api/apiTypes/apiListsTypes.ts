import { IResponseList } from './apiTypes';

export interface IDateRange {
  maximum: string;
  minimum: string;
}
export interface IResponseUpcomingMovies<T> extends IResponseList<T> {
  dates: IDateRange;
}
