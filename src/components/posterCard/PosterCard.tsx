import { Grid, IconButton, Tooltip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GridViewIcon from '@mui/icons-material/GridView';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { MovieDetails } from '../../api/apiTypes';
import { useState } from 'react';
import { Modal } from '../../UIKit/Modal/Modal';

interface PosterProps {
  movie: MovieDetails;
  showBorder?: boolean;
}
export const PosterCard: React.FC<PosterProps> = ({ movie, showBorder = true }) => {
  const { poster_path, popularity, genres, vote_count } = movie || {};
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
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt="Poster"
          style={{ width: '100%', height: '100%', borderRadius: '10px', cursor: 'pointer' }}
          onClick={handleClickOpen}
        />
      </Grid>
      <Grid item display="flex" justifyContent="center" padding="5px">
        <Tooltip title={`Watched by ${Math.round(popularity)} members`} placement="top">
          <IconButton sx={{ color: 'green' }}>
            <RemoveRedEyeIcon />
          </IconButton>
        </Tooltip>

        <Tooltip
          title={`Appears in genres: ${genres?.map((g) => g.name).join(', ')}`}
          placement="top"
        >
          <IconButton sx={{ color: '#40bcf4' }}>
            <GridViewIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title={`Liked by ${vote_count} members`} placement="top">
          <IconButton sx={{ color: 'orange' }}>
            <FavoriteIcon />
          </IconButton>
        </Tooltip>
      </Grid>
      <Modal open={open} handleClose={handleClose} posters={movie?.images?.posters || []} />
    </Grid>
  );
};
