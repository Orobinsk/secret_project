import { IMovieDiscover } from '../../types/movieTypes';
import { ICollection, ISearchPerson, ISearchTv } from '../../types/searchTypes';
import { mediaNames } from '../../pages/SearchResult/SearchResult';

type MediaItem = IMovieDiscover | ISearchPerson | ICollection | ISearchTv;

export const useMediaDetails = (film: MediaItem, mediaName: string) => {
  let imageSource = null;
  let titleSource = '';
  let overviewSource = '';

  switch (mediaName) {
    case mediaNames.movie: {
      const { poster_path, original_title, overview } = film as IMovieDiscover;
      imageSource = poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}` : null;
      titleSource = original_title || '';
      overviewSource = overview || '';
      break;
    }

    case mediaNames.series: {
      const { poster_path, original_name, overview } = film as ISearchTv;
      imageSource = poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}` : null;
      titleSource = original_name || '';
      overviewSource = overview || '';
      break;
    }

    case mediaNames.actor: {
      const { profile_path, name } = film as ISearchPerson;
      imageSource = profile_path ? `https://image.tmdb.org/t/p/original/${profile_path}` : null;
      titleSource = name || '';
      break;
    }

    case mediaNames.collection: {
      const { poster_path, name } = film as ICollection;
      imageSource = poster_path ? `https://image.tmdb.org/t/p/original/${poster_path}` : null;
      titleSource = name || '';
      break;
    }

    case mediaNames.cast: {
      const { profile_path, name } = film as ISearchPerson;
      imageSource = profile_path ? `https://image.tmdb.org/t/p/original/${profile_path}` : null;
      titleSource = name || '';
      break;
    }

    default:
      imageSource = null;
      titleSource = '';
  }

  return { imageSource, titleSource, overviewSource };
};
