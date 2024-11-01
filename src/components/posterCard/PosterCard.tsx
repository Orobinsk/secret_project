import { Grid, IconButton, Tooltip, Typography } from '@mui/material';
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

  const iconData = [
    {
      icon: <RemoveRedEyeIcon style={{ height: '30px', width: '30px' }} />,
      title: `Watched by ${Math.round(popularity)} members`,
      color: 'green',
    },
    {
      icon: <StarsIcon style={{ height: '30px', width: '30px' }} />,
      title: `Average rating ${movie?.vote_average?.toFixed(1)}`,
      color: '#40bcf4',
    },
    {
      icon: <FavoriteIcon style={{ height: '30px', width: '30px' }} />,
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
      border="2px solid transparent"
      borderRadius="10px"
      sx={{
        '&:hover': showBorder ? { border: '2px  solid #00e054' } : { border: '2px solid #12161a' },
      }}
      margin="10px"
    >
      <Grid item>
        <img
          src={`${imageConfig.images.secure_base_url}${imageSizes.high}${poster_path}`}
          alt="Poster"
          style={posterImgStyle}
          onClick={handleClickOpen}
        />
      </Grid>
      <Grid item display="flex" justifyContent="center" padding="5px">
        {iconData.map((data, index) => (
          <Tooltip
            key={index}
            title={<Typography style={{ fontSize: '15px' }}>{data.title}</Typography>}
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
