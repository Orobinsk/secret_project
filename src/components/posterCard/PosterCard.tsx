import { Grid, IconButton, Tooltip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarsIcon from '@mui/icons-material/Stars';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { CSSProperties, FC, useContext, useState } from 'react';
import { PosterModal } from '../../UIKit/PosterModal/PosterModal';
import { MovieDetails } from '../../types/movieTypes';
import { ImageConfig } from '../../providers/ImageConfigProvider/ImageConfigContexts';
import { imageSizes } from '../../constants';

interface PosterProps {
  movie: MovieDetails;
  showBorder?: boolean;
}
const posterImgStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '10px',
  cursor: 'pointer',
} as CSSProperties;

export const PosterCard: FC<PosterProps> = ({ movie, showBorder = true }) => {
  const { poster_path, popularity, vote_count } = movie || {};
  const imageConfig = useContext(ImageConfig);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid
      border="2px solid black"
      borderRadius="10px"
      width="15rem"
      height="22rem"
      sx={{
        '&:hover': showBorder ? { border: '2px solid #00e054' } : { border: '2px solid #12161a' },
      }}
      margin="10px 5px"
    >
      <Grid item>
        <img
          src={`${imageConfig.images.secure_base_url}${imageSizes.medium}${poster_path}`}
          alt="Poster"
          style={posterImgStyle}
          onClick={handleClickOpen}
        />
      </Grid>
      <Grid item display="flex" justifyContent="center" padding="5px">
        <Tooltip title={`Watched by ${Math.round(popularity)} members`} placement="top">
          <IconButton sx={{ color: 'green' }}>
            <RemoveRedEyeIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title={`Average rating ${movie?.vote_average?.toFixed(1)}`} placement="top">
          <IconButton sx={{ color: '#40bcf4' }}>
            <StarsIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title={`Liked by ${vote_count} members`} placement="top">
          <IconButton sx={{ color: 'orange' }}>
            <FavoriteIcon />
          </IconButton>
        </Tooltip>
      </Grid>
      <PosterModal open={open} handleClose={handleClose} posters={movie?.images?.posters || []} />
    </Grid>
  );
};
