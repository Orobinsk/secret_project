import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Grid, Skeleton, Typography } from '@mui/material';
import { useContext, useEffect, useMemo, useState } from 'react';
import { getMovie } from '../../api/api';
import { PosterCard } from '../../components/posterCard/PosterCard';
import { MovieDesc } from './components/MovieDesc';
import { MovieReviews } from './components/MovieReviews';
import { API_PARAMS, imageSizes, LANGUAGE, MOVIE_ENDPOINTS } from '../../constants';
import { LabelButton } from '../../UIKit/LabelButton/LabelButton';
import { MovieDetails } from '../../types/movieTypes';
import { createFilmPageStyles } from './createFilmPageStyles';
import { ImageConfig } from '../../providers/ImageConfigProvider/ImageConfigContexts';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { MovieTrailerModal } from './components/MovieTrailerModal/MovieTrailerModal';
import { Link as RouterLink } from 'react-router-dom';
import { IGenresDetails } from '../../api/apiTypes/apiGenresTypes';
import { Player } from '../../components/Player';

const LABELS = ['cast', 'crew', 'details', 'genres', 'releases'];
const PARAMS = [
  MOVIE_ENDPOINTS.RELEASE_DATES,
  MOVIE_ENDPOINTS.CREDITS,
  MOVIE_ENDPOINTS.REVIEW,
  MOVIE_ENDPOINTS.IMAGES,
  MOVIE_ENDPOINTS.LISTS,
  MOVIE_ENDPOINTS.VIDEOS,
].join(',');
const styles = createFilmPageStyles();

export const FilmPage = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetails>();
  const [activeLabel, setActiveLabel] = useState<string | null>(LABELS[0]);
  const imageConfig = useContext(ImageConfig);
  const [openTrailer, setOpenTrailer] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getMovie({
        id,
        params: {
          [API_PARAMS.APPEND]: PARAMS,
          [API_PARAMS.LANGUAGE]: LANGUAGE.EN,
        },
      }).then((data) => {
        setMovie(data);
      });
    }
  }, [id]);

  const details = useMemo(
    () => [
      {
        title: 'Studio',
        name: movie?.production_companies?.map((production) => production.name) ?? [],
      },
      {
        title: 'Country',
        name: movie?.production_companies?.map((production) => production.origin_country) ?? [],
      },
      {
        title: 'Language',
        name: movie?.spoken_languages?.map((language) => language.name) ?? [],
      },
    ],
    [movie],
  );

  const toggleTrailerModal = () => {
    setOpenTrailer((prev) => !prev);
  };

  const handleButtonClick = (label: string) => {
    setActiveLabel(label);
  };

  const handleNavigateToList = (genre: IGenresDetails) => {
    navigate(`/lists?genre=${encodeURIComponent(JSON.stringify(genre))}`);
  };

  const renderLabels = () =>
    LABELS.map((label, index) => (
      <Grid item key={index}>
        <Button
          onClick={() => handleButtonClick(label)}
          sx={styles.labelButton(activeLabel === label)}
        >
          {label}
        </Button>
      </Grid>
    ));

  const renderCast = () =>
    movie?.credits?.cast.length
      ? movie.credits.cast.map((member, index) => (
          <Grid item key={index}>
            <RouterLink to={`/person/${member.id}`}>
              <LabelButton label={member.name} />
            </RouterLink>
          </Grid>
        ))
      : Array.from({ length: 6 }).map((_, index) => (
          <Grid item key={index}>
            <Skeleton sx={{ m: '2px' }} width="120px" height="40px" />
          </Grid>
        ));
  interface CrewDepartments {
    [key: string]: string[];
  }
  const renderCrew = () => {
    if (!movie?.credits?.crew) return null;
    const crewDepartments = movie.credits.crew.reduce<CrewDepartments>((acc, crew) => {
      acc[crew.known_for_department] = acc[crew.known_for_department] || [];
      acc[crew.known_for_department].push(crew.name);
      return acc;
    }, {});

    return (
      <Grid container>
        {Object.keys(crewDepartments).map((department, index) => (
          <Grid container key={index} mb={1}>
            <Grid item xs={4}>
              <Typography fontSize="15px" color="#9ab">
                {department}
              </Typography>
            </Grid>
            <Grid item xs={8}>
              {crewDepartments[department].map((name: string, i: number) => (
                <LabelButton key={i} label={name} />
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    );
  };

  const renderDetails = () =>
    details.map((detail, index) => (
      <Grid container key={index}>
        {Array.isArray(detail.name) && detail.name.length > 0 && detail.title && (
          <Grid container alignItems="center">
            <Grid item xs={2}>
              <Typography fontSize="15px" color="#9ab">
                {detail.title}
              </Typography>
            </Grid>
            <Grid item xs={10}>
              {detail.name.map((name, i) => name && <LabelButton key={i} label={name} />)}
            </Grid>
          </Grid>
        )}
      </Grid>
    ));

  const renderGenres = () =>
    movie?.genres.map((genre, index) => (
      <Grid item key={index}>
        <LabelButton changeLabel={() => handleNavigateToList(genre)} label={genre.name} />
      </Grid>
    ));

  const renderReleases = () => {
    const uniqueNotes = Array.from(
      new Set(
        movie?.release_dates?.results
          ?.flatMap((result) => result.release_dates)
          .filter((date) => date?.note)
          .map((date) => date.note),
      ),
    );

    return uniqueNotes.map((note, index) => {
      const releaseYear =
        movie?.release_dates?.results
          .find((result) => result.release_dates.some((date) => date.note === note))
          ?.release_dates.find((date) => date.note === note)
          ?.release_date.slice(0, 4) || '';

      return (
        <Grid container key={index} mb={1} alignItems="center">
          <Grid item xs={6}>
            <Typography fontSize="15px" color="#9ab">
              {note}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <LabelButton label={releaseYear} />
          </Grid>
        </Grid>
      );
    });
  };

  return (
    <Grid
      container
      spacing={1}
      sx={{
        marginTop: !movie || movie?.backdrop_path ? '300px' : 0,
        ...styles.container,
      }}
    >
      {movie?.backdrop_path ? (
        <Box sx={styles.backdrop}>
          <img
            src={`${imageConfig.images.secure_base_url}${imageSizes.original}${movie?.backdrop_path}`}
            alt=""
            style={styles.backdropImage}
          />
        </Box>
      ) : (
        <Box sx={styles.backdropNone} />
      )}
      <Grid item xs={12} sm={4} md={3} lg={3} mb={2}>
        {movie ? (
          <PosterCard movie={movie} showBorder={false} />
        ) : (
          <>
            <Skeleton height="420px" width="100%" variant="rounded" sx={{ borderRadius: '10px' }} />
            <Grid
              item
              display="flex"
              justifyContent="center"
              height="56px"
              alignItems="center"
              gap={2}
            >
              {Array.from({ length: 3 }).map((_, index) => (
                <Skeleton variant="circular" key={index} sx={{ p: 2 }} width="30px" height="30px" />
              ))}
            </Grid>
          </>
        )}
        {movie && movie.videos && movie?.videos.results.length > 0 && (
          <>
            <Box sx={styles.previewWrapper} onClick={toggleTrailerModal}>
              <img
                src={`https://img.youtube.com/vi/${movie.videos.results[0].key}/hqdefault.jpg`}
                alt="Movie Trailer Poster"
                style={{ width: '100%' }}
              />
              <PlayCircleOutlineIcon sx={styles.playPreviewIcon} />
            </Box>
            <MovieTrailerModal
              open={openTrailer}
              onClose={toggleTrailerModal}
              trailers={movie.videos.results}
            />
          </>
        )}
      </Grid>
      <Grid item xs={12} sm={8} md={9} lg={9}>
        <MovieDesc movie={movie} />
        <Grid container borderBottom="1px solid #9ab" display="flex">
          {renderLabels()}
        </Grid>
        <Grid container margin="10px 0">
          {activeLabel === 'cast' && renderCast()}
          {activeLabel === 'crew' && renderCrew()}
          {activeLabel === 'details' && renderDetails()}
          {activeLabel === 'genres' && renderGenres()}
          {activeLabel === 'releases' && renderReleases()}
          {movie && (
            <Box width="100%" mt={1} sx={{ aspectRatio: 16 / 9 }}>
              <Player imdbId={movie.imdb_id} />
            </Box>
          )}
          {movie && movie.reviews && movie.id && (
            <MovieReviews id={movie.id} reviews={movie.reviews} />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
