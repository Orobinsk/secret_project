import { useEffect, useState } from 'react';
import { Carousel } from '../../components/carousel/Carousel';
import { Movielist } from '../../components/movieList/MovieList';
import { IMovie, ISearchResult } from '../../api/apiTypes';
import { getMovie } from '../../api/api';
import { API_PARAM, ENDPOINTS } from '../../constants';

export const MainPage = () => {
  const [movieList, setMovieList] = useState<ISearchResult<IMovie[]>>();

  useEffect(() => {
    getMovie({ endpoint: ENDPOINTS.POPULAR, params: { [API_PARAM.PAGE]: 2 } }).then((data) =>
      setMovieList(data),
    );
  }, []);

  return (
    <>
      <Carousel />
      {movieList?.results.map((movie: IMovie) => (
        <Movielist
          key={movie.id}
          movie={{
            poster: movie.poster_path,
            title: movie.title,
            release: movie.release_date,
            popularity: movie.popularity,
            overview: movie.overview, // добавляем overview, если нужно
          }}
        />
      ))}
    </>
  );
};
