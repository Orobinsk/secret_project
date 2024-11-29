import {
  Box,
  Button,
  Grid,
  IconButton,
  Skeleton,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useContext, useEffect, useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import StarsIcon from '@mui/icons-material/Stars';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { getMovieList } from '../../api/api';
import { IResponseList } from '../../api/apiTypes/apiTypes';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { IMovieDiscover } from '../../types/movieTypes';
import { ImageConfig } from '../../providers/ImageConfigProvider/ImageConfigContexts';
import { imageSizes } from '../../constants';
import { createCarouselStyles } from './createCarouselStyles';

const iconsData = [
  {
    title: (movie: IMovieDiscover) => `Watched by ${Math.round(movie?.popularity)} members`,
    color: 'green',
    icon: <RemoveRedEyeIcon style={{ height: '25px', width: '25px' }} />,
  },
  {
    title: (movie: IMovieDiscover) => `Average rating ${movie?.vote_average?.toFixed(1)}`,
    color: '#40bcf4',
    icon: <StarsIcon style={{ height: '25px', width: '25px' }} />,
  },
  {
    title: (movie: IMovieDiscover) => `Liked by ${movie?.vote_count} members`,
    color: 'orange',
    icon: <FavoriteIcon style={{ height: '25px', width: '25px' }} />,
  },
];

export const Carousel = () => {
  const [movieList, setMovieList] = useState<IResponseList<IMovieDiscover[]>>();
  const imageConfig = useContext(ImageConfig);
  const theme = useTheme();
  const styles = createCarouselStyles(theme);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const ITEMSPERPAGE = isSmallScreen ? 1 : 4;

  useEffect(() => {
    getMovieList().then((data) => setMovieList(data));
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalMovies = movieList?.results.length;

  const handleNext = () => {
    if (totalMovies) {
      setCurrentIndex((prevIndex) => (prevIndex + ITEMSPERPAGE) % totalMovies);
    }
  };

  const handlePrev = () => {
    if (totalMovies) {
      setCurrentIndex((prevIndex) => (prevIndex - ITEMSPERPAGE + totalMovies) % totalMovies);
    }
  };

  const visibleMovies = movieList?.results
    ? [...movieList.results, ...movieList.results].slice(currentIndex, currentIndex + ITEMSPERPAGE)
    : [];

  const HeaderButtons = () => (
    <Grid container justifyContent="space-between" borderBottom="1px solid #89a">
      <Grid item>
        <RouterLink to="/lists">
          <Button sx={styles.headerBtnStyles}>POPULAR FILMS THIS WEEK</Button>
        </RouterLink>
      </Grid>
      <Grid item>
        <RouterLink to="/lists">
          <Button sx={styles.headerBtnStyles}>MORE</Button>
        </RouterLink>
      </Grid>
    </Grid>
  );

  const ForwardButton = () => (
    <IconButton
      onClick={handleNext}
      data-testid="carousel-slide-next"
      sx={{
        color: theme.palette.primary.main,
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );

  const BackButton = () => (
    <IconButton
      onClick={handlePrev}
      data-testid="carousel-slide-previous"
      sx={{
        color: theme.palette.primary.main,
      }}
    >
      <ArrowBackIosIcon />
    </IconButton>
  );

  const MovieGrid = () => (
    <Grid container spacing={2} p={1}>
      {visibleMovies.map((movie) => (
        <Grid item xs={12} sm={6} md={3} key={movie.id} height={450}>
          <Box sx={styles.movieGridStyles}>
            <RouterLink to={`/film/${movie.id}`}>
              <img
                src={`${imageConfig.images.secure_base_url}${imageSizes.high}${movie.poster_path}`}
                alt=""
                data-testid={`movie-poster-${movie.id}`}
                style={styles.carouselImage}
              />
            </RouterLink>
            <Grid container justifyContent="center" padding="5px">
              {iconsData.map((data, index) => (
                <Tooltip
                  key={index}
                  title={<Typography fontSize="10px">{data.title(movie)}</Typography>}
                  placement="top"
                >
                  <IconButton sx={{ color: data.color }}>{data.icon}</IconButton>
                </Tooltip>
              ))}
            </Grid>
          </Box>
        </Grid>
      ))}
    </Grid>
  );

  const LoadingSkeleton = () => (
    <Grid container spacing={2} p={1} minHeight={466}>
      {Array.from({ length: ITEMSPERPAGE }).map((_, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          key={index}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Skeleton variant="rounded" width="100%" height={370} sx={{ maxWidth: 250 }} />
          <Box display="flex" justifyContent="center" gap={2} p="5px" m={1}>
            <Skeleton variant="circular" width={25} height={25} />
            <Skeleton variant="circular" width={25} height={25} />
            <Skeleton variant="circular" width={25} height={25} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <>
      <HeaderButtons />
      <Box display="flex" alignItems="center">
        <BackButton />
        {movieList ? <MovieGrid /> : <LoadingSkeleton />}
        <ForwardButton />
      </Box>
    </>
  );
};
