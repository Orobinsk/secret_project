import { useEffect, useState } from 'react';
import { Carousel } from '../../components/carousel/Carousel';
import { MovieItem } from '../../components/movieItem/MovieItem';
import { getMovieList } from '../../api/api';
import { IResponseList } from '../../api/apiTypes/apiTypes';
import { IMovieDiscover } from '../../types/movieTypes';

export const MainPage = () => {
  const [movieList, setMovieList] = useState<IResponseList<IMovieDiscover[]>>();

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
