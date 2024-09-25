import { useParams } from 'react-router-dom';
import { Player } from '../../components/Player';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import { IMovie, ISearchResult, MovieDetails } from '../../api/apiTypes'; //что-то не работает мой интерфейс
import { useEffect, useState } from 'react';
import { getMovie } from '../../api/api';
import { PosterCard } from '../../components/posterCard/PosterCard';
import { MovieDesc } from '../../components/movieDesc/MovieDesc';
import { MovieDetailsPanel } from '../../components/movieDetailsPanel/MovieDetailsPanel';

export const FilmPage = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetails>();

  useEffect(() => {
    debugger;
    getMovie({ endpoint: id }).then(
      //@ts-ignore
      (data) => setMovie(data),
    );
  }, []);

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <PosterCard posterPath={movie?.poster_path} showBorder={false} />
        </Grid>
        <Grid item xs={8}>
          <MovieDesc
            mDesc={{
              title: movie?.original_title,
              overview: movie?.overview,
              release_date: movie?.release_date,
              tagline: movie?.tagline,
            }}
          />
          <MovieDetailsPanel />
        </Grid>
      </Grid>
      {/* <Player query="место под соснами" /> */}
    </Box>
  );
};
