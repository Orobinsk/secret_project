export interface SeriesDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: { id: number; name: string }[];
  id: number;
  name: string;
  homepage: string;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: { id: number; logo_path: string; name: string; origin_country: string }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;

  // эти поля приходят при использовании параметра append
  account_states?: IAccountStates;
  aggregate_credits?: IAggregateCredits;
  alternative_titles?: IAlternativeTitles;
  changes?: IChanges;
  content_ratings?: IContentRatings;
  credits?: ICredits;
  images?: IImages;
}
export interface IAccountStates {
  id: number;
  favorite: boolean;
  rated: {
    value: number;
  };
  watchlist: boolean;
}
export interface IAggregateCredits {
  cast?: {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    roles?: {
      credit_id: string;
      character: string;
      episode_count: number;
      total_episode_count: number;
      order: number;
    }[];
  }[];

  crew?: {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    jobs?: {
      credit_id: string;
      job: string;
      episode_count: number;
      department: string;
      total_episode_count: number;
    }[];
  }[];
}

export interface IAlternativeTitles {
  id: number;
  results: {
    iso_3166_1: string;
    title: string;
    type: string;
  }[];
}

export interface IChanges {
  changes: {
    key: string;
    items: {
      id: string;
      action: string;
      time: string;
      iso_639_1: string;
      iso_3166_1: string;
      value: {
        poster: {
          file_path: string;
          iso_639_1: string;
        };
      };
      original_value: {
        poster: {
          file_path: string;
          iso_639_1: string;
        };
      };
    }[];
  }[];
}
export interface IContentRatings {
  results: {
    descriptors: string[];
    iso_3166_1: string;
    rating: string;
    id: number;
  }[];
}

export interface ICredits {
  cast: {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    character: string;
    credit_id: string;
    order: number;
  }[];

  crew: {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    credit_id: string;
    department: string;
    job: string;
  }[];
}

export interface IImages {
  backdrops: {
    aspect_ratio: number;
    height: number;
    iso_639_1: string;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
    id: number;
  }[];

  logos: {
    aspect_ratio: number;
    height: number;
    iso_639_1: string;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
  }[];

  posters: {
    aspect_ratio: number;
    height: number;
    iso_639_1: string;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
  }[];
}
