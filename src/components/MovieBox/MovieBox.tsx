import { Box, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { theme } from '../../providers/theme/theme';
import { FC, useContext } from 'react';
import { ImageConfig } from '../../providers/ImageConfigProvider/ImageConfigContexts';
import { imageSizes } from '../../constants';

interface IMovieBoxProps {
  movie: {
    id: number;
    title: string;
    original_title: string;
    poster_path: string | null;
  }[];
}

const posterImgStyles = {
  border: '2px solid transparent',
  position: 'relative',
  '&:hover': { border: '2px solid #00e054' },
  aspectRatio: '2 / 3',
  [theme.breakpoints.down('xs')]: { aspectRatio: '1 / 1.5' },
};

const imgStyles: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.primary.main,
  textAlign: 'center',
  textDecoration: 'none',
  backgroundColor: 'white',
};

export const MovieBox: FC<IMovieBoxProps> = ({ movie }) => {
  const imageConfig = useContext(ImageConfig);

  const movieElements = movie.map((movieItem) => (
    <Grid item xs={6} sm={3} md={2.4} lg={2.4} key={movieItem.id} sx={posterImgStyles}>
      <RouterLink to={`/film/${movieItem.id}`} style={{ textDecoration: 'none' }}>
        {movieItem.poster_path ? (
          <img
            src={`${imageConfig.images.secure_base_url}${imageSizes.medium}${movieItem.poster_path}`}
            alt={movieItem.title}
            style={imgStyles}
          />
        ) : (
          <Box sx={imgStyles}>{movieItem.original_title}</Box>
        )}
      </RouterLink>
    </Grid>
  ));

  return (
    <Grid item container>
      {movieElements}
    </Grid>
  );
};
