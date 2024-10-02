import { useParams } from 'react-router-dom';
import { Player } from '../../components/Player';
import { Box, Button, Grid, Typography } from '@mui/material';
import { MovieDetails } from '../../api/apiTypes';
import { useEffect, useState } from 'react';
import { getMovie } from '../../api/api';
import { PosterCard } from '../../components/posterCard/PosterCard';
import { MovieDesc } from './movieDesc/MovieDesc';
import { LabelButton } from '../../UIKit/LabelButton/LabelButton';

export const FilmPage = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetails>();
  const [activeLabel, setActiveLabel] = useState<string | null>(null);

  useEffect(() => {
    getMovie({ endpoint: `${id}?api_key=API_KEY&append_to_response=release_dates,credits` }).then(
      //@ts-ignore
      (data) => {
        setMovie(data);
      },
    );
  }, []);

  const labels = ['cast', 'crew', 'details', 'genres', 'releases'];

  const details = [
    {
      title: 'Studio',
      name: movie?.production_companies?.map((production) => production.name),
    },
    {
      title: 'Country',
      name: movie?.production_companies?.map((production) => production.origin_country),
    },
    {
      title: 'Language',
      name: movie?.spoken_languages?.map((language) => language.name),
    },
    {
      title: 'Alternative Titles',
      name: movie?.spoken_languages?.map((language) => language.title),
    },
  ];

  const handleButtonClick = (label: string) => {
    setActiveLabel(label);
  };

  return (
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
        <Box borderBottom="1px solid #9ab" display="flex">
          {labels.map((label, index) => (
            <Button
              key={index}
              onClick={() => handleButtonClick(label)}
              border="1px solid #11171B"
              sx={{
                color: '#00e054',
                borderRadius: 0,
                color: activeLabel === label ? 'white' : '#00e054',
                '&:hover': { borderBottom: '1px solid #9ab' },
              }}
              disableRipple
            >
              {label}
            </Button>
          ))}
        </Box>
        <Box margin="10px 0">
          {activeLabel === 'cast' &&
            movie?.credits?.cast.map((member: any, index: number) => (
              <LabelButton key={index} label={member.name} />
            ))}
          {activeLabel === 'crew' && (
            <Box>
              {movie?.credits?.crew
                // Отфильтруем, чтобы исключить актеров
                .filter((crew: any) => crew.known_for_department !== 'Acting')
                // Сгруппируем по департаментам
                .reduce((acc: any, crew: any) => {
                  // Если департамент уже есть в аккумуляторе, добавляем новое имя
                  if (acc[crew.known_for_department]) {
                    acc[crew.known_for_department].push(crew.name);
                  } else {
                    // Если департамент встречается впервые, создаем новый массив
                    acc[crew.known_for_department] = [crew.name];
                  }
                  return acc;
                }, {}) &&
                // Теперь отобразим сгруппированные данные
                Object.keys(
                  movie?.credits?.crew?.reduce((acc: any, crew: any) => {
                    if (acc[crew.known_for_department]) {
                      acc[crew.known_for_department].push(crew.name);
                    } else {
                      acc[crew.known_for_department] = [crew.name];
                    }
                    return acc;
                  }, {}),
                ).map((department, index) => (
                  <Box key={index} display="grid" gridTemplateColumns="1fr 4fr" gap={2} mb={1}>
                    <Typography color="#9ab">{department}</Typography>
                    <Box>
                      {movie.credits.crew
                        .filter((crew: any) => crew.known_for_department === department)
                        .map((crew: any, i: number) => (
                          <LabelButton key={i} label={crew.name} />
                        ))}
                    </Box>
                  </Box>
                ))}
            </Box>
          )}
          {activeLabel === 'details' && (
            <Box display="flex" flexDirection="column" flexWrap="wrap">
              {details.map((detail, index) => (
                <Box key={index}>
                  {Array.isArray(detail.name) && detail.name.length > 0 && detail.title && (
                    <Box display="grid" gridTemplateColumns="1fr 4fr" alignItems="center">
                      <Typography color="#9ab">{detail.title}</Typography>
                      <Box display="flex" flexWrap="wrap">
                        {detail.name.map((name, i) => name && <LabelButton key={i} label={name} />)}
                      </Box>
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          )}
          {activeLabel === 'genres' &&
            movie?.genres.map((genre, index) => <LabelButton key={index} label={genre.name} />)}
          Копировать код
          {activeLabel === 'releases' && (
            <>
              {Array.from(
                new Set(
                  movie?.release_dates?.results
                    ?.flatMap((result) => result.release_dates)
                    .filter((date) => date?.note)
                    .map((date) => date.note),
                ),
              ).map((note, index) => (
                <Box
                  key={index}
                  display="grid"
                  gridTemplateColumns="1fr 1fr"
                  gap={2}
                  mb={1}
                  alignItems="center"
                >
                  <Typography color="#9ab">{note}</Typography>
                  <Box>
                    <LabelButton
                      label={movie.release_dates.results
                        .find((result) => result.release_dates.some((date) => date.note === note))
                        ?.release_dates.find((date) => date.note === note)
                        ?.release_date.slice(0, 4)}
                    />
                  </Box>
                </Box>
              ))}
            </>
          )}
        </Box>
      </Grid>
    </Grid>

    /* <Player query="место под соснами" /> */
  );
};
