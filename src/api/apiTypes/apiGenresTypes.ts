export interface IGetGenresParams {
  params?: { [key: string]: number | string };
}

export interface IGetGenres {
  genres: IGenresDetails[];
}

export interface IGenresDetails {
  id: number | null;
  name: string;
}
