import { useParams } from 'react-router-dom';
import { Player } from '../../components/Player';
import { Typography } from '@mui/material';
import { IMovie, ISearchResult } from '../../api/apiTypes';
import { useEffect, useState } from 'react';
import { getMovie } from '../../api/api';
import { API_PARAM, ENDPOINTS } from '../../constants';

export const FilmPage = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<any>();

  useEffect(() => {
    getMovie({ endpoint: id }).then(
      //@ts-ignore
      (data) => setMovie(data),
    );
  }, []);

  return (
    <div>
      <Typography>{movie?.original_title}</Typography>
      <Player query="место под соснами" />
    </div>
  );
};
