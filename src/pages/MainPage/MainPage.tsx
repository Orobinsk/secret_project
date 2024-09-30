import { useEffect, useState } from 'react';
import { Carousel } from '../../components/carousel/Carousel';
import { MovieItem } from '../../components/movieList/MovieItem';
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
      {movieList?.results.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
    </>
  );
};
