import { Grid, IconButton, Tooltip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarsIcon from '@mui/icons-material/Stars';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useState } from 'react';
import { PosterModal } from '../../UIKit/PosterModal/PosterModal';
import { MovieDetails } from '../../types/movieTypes';

interface PosterProps {
  movie: MovieDetails;
  showBorder?: boolean;
}
const posterImgStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '1rem',
  cursor: 'pointer',
} as React.CSSProperties;

export const PosterCard: React.FC<PosterProps> = ({ movie, showBorder = true }) => {
  const { poster_path, popularity, vote_count } = movie || {};
  const iconData = [
    {
      icon: <RemoveRedEyeIcon style={{ height: '3rem', width: '3rem' }} />,
      title: `Watched by ${Math.round(popularity)} members`,
      color: 'green',
    },
    {
      icon: <StarsIcon style={{ height: '3rem', width: '3rem' }} />,
      title: `Average rating ${movie?.vote_average?.toFixed(1)}`,
      color: '#40bcf4',
    },
    {
      icon: <FavoriteIcon style={{ height: '3rem', width: '3rem' }} />,
      title: `Liked by ${vote_count} members`,
      color: 'orange',
    },
  ];
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid
      border="0.2rem solid transparent"
      borderRadius="1rem"
      sx={{
        '&:hover': showBorder
          ? { border: '0.2rem  solid #00e054' }
          : { border: '0.2rem solid #12161a' },
      }}
      margin="1rem"
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt="Poster"
        style={posterImgStyle}
        onClick={handleClickOpen}
      />

      <Grid item display="flex" justifyContent="center" padding="0.5rem">
        {iconData.map((data, index) => (
          <Tooltip
            key={index}
            title={<span style={{ fontSize: '1.5rem' }}>{data.title}</span>}
            placement="top"
          >
            <IconButton sx={{ color: data.color }}>{data.icon}</IconButton>
          </Tooltip>
        ))}
      </Grid>
      <PosterModal open={open} handleClose={handleClose} posters={movie?.images?.posters || []} />
    </Grid>
  );
};
