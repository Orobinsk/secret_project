import { useParams } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getMovie } from '../../api/api';
import { PosterCard } from '../../components/posterCard/PosterCard';
import { MovieDesc } from './components/MovieDesc';
import { MovieReviews } from './components/MovieReviews';
import { API_PARAMS, MOVIE_ENDPOINTS } from '../../constants';
import { LabelButton } from '../../UIKit/LabelButton/LabelButton';
import { MovieDetails } from '../../types/movieTypes';

const LABELS = ['cast', 'crew', 'details', 'genres', 'releases'];
const PARAMS = [
  MOVIE_ENDPOINTS.RELEASE_DATES,
  MOVIE_ENDPOINTS.CREDITS,
  MOVIE_ENDPOINTS.REVIEW,
  MOVIE_ENDPOINTS.IMAGES,
  MOVIE_ENDPOINTS.LISTS,
].join(',');

export const FilmPage = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetails>();
  const [activeLabel, setActiveLabel] = useState<string | null>(LABELS[0]);

  useEffect(() => {
    getMovie({
      id,
      params: { [API_PARAMS.APPEND]: PARAMS },
    }).then((data) => {
      setMovie(data);
    });
  }, [id]);

  const details = [
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
  ];

  const handleButtonClick = (label: string) => {
    setActiveLabel(label);
  };

  const renderLabels = () =>
    LABELS.map((label, index) => (
      <Grid item key={index}>
        <Button
          onClick={() => handleButtonClick(label)}
          sx={{
            border: '1px solid #11171B',
            color: activeLabel === label ? 'white' : '#00e054',
            borderRadius: 0,
            '&:hover': { borderBottom: '1px solid #9ab' },
          }}
          disableRipple
        >
          {label}
        </Button>
      </Grid>
    ));

  const renderCast = () =>
    movie?.credits?.cast.map((member, index) => (
      <Grid item key={index}>
        <LabelButton label={member.name} />
      </Grid>
    ));
  interface CrewDepartments {
    [key: string]: string[];
  }
  const renderCrew = () => {
    const crewDepartments = movie?.credits?.crew.reduce<CrewDepartments>((acc, crew) => {
      acc[crew.known_for_department] = acc[crew.known_for_department] || [];
      acc[crew.known_for_department].push(crew.name);
      return acc;
    }, {});

    return (
      <Grid container>
        {Object.keys(crewDepartments).map((department, index) => (
          <Grid container key={index} mb={1}>
            <Grid item xs={4}>
              <Typography color="#9ab">{department}</Typography>
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
            <Grid item xs={4}>
              <Typography color="#9ab">{detail.title}</Typography>
            </Grid>
            <Grid item xs={8}>
              {detail.name.map((name, i) => name && <LabelButton key={i} label={name} />)}
            </Grid>
          </Grid>
        )}
      </Grid>
    ));

  const renderGenres = () =>
    movie?.genres.map((genre, index) => (
      <Grid item key={index}>
        <LabelButton label={genre.name} />
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

    return uniqueNotes.map((note, index) => (
      <Grid container key={index} mb={1} alignItems="center">
        <Grid item xs={6}>
          <Typography color="#9ab">{note}</Typography>
        </Grid>
        <Grid item xs={6}>
          <LabelButton
            label={movie.release_dates.results
              .find((result) => result.release_dates.some((date) => date.note === note))
              ?.release_dates.find((date) => date.note === note)
              ?.release_date.slice(0, 4)}
          />
        </Grid>
      </Grid>
    ));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <PosterCard movie={movie} showBorder={false} />
      </Grid>
      <Grid item xs={8}>
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
          {movie ? (
            <MovieReviews movie={movie} />
          ) : (
            <Typography>No movie details available.</Typography>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
