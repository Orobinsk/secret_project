import { useEffect, useState } from 'react';
import { Carousel } from '../../components/carousel/Carousel';
import { MovieItem } from '../../components/movieItem/MovieItem';
import { IMovie, IResponseList } from '../../api/apiTypes';
import { getMovieList } from '../../api/api';

export const MainPage = () => {
  const [movieList, setMovieList] = useState<IResponseList<IMovie[]>>();

  useEffect(() => {
    getMovieList().then((data) => setMovieList(data));
  }, []);

  return (
    <>
      <Carousel />
      {movieList?.results.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
    </>
  );
};
