import { Box, Pagination } from '@mui/material';
import { MovieBox } from '../../components/MovieBox/MovieBox';
import { ChangeEvent, useState } from 'react';
import { IMovieCreditsResponse } from '../../types/personTypes';

interface IActorsMovies {
  movies: IMovieCreditsResponse[`cast`];
}
const itemsPerPage = 20;

export const ActorsMovies = ({ movies }: IActorsMovies) => {
  const [page, setPage] = useState(1);

  const handleChange = (_: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const totalPages = Math.ceil(movies.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMovies = movies.slice(startIndex, endIndex);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <MovieBox movie={currentMovies} />
      <Pagination
        count={totalPages}
        page={page}
        color="primary"
        onChange={handleChange}
        sx={{ mt: 1 }}
      />
    </Box>
  );
};
