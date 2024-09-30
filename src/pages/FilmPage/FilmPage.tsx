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
  const [credits, setCredits] = useState<any>(null);
  const [release, setRelease] = useState<any>(null);
  const [activeLabel, setActiveLabel] = useState<string | null>(null);

  useEffect(() => {
    getMovie({ endpoint: `${id}?api_key=API_KEY&append_to_response=release_dates,credits` }).then(
      //@ts-ignore
      (data) => {
        setMovie(data);
        setCredits(data.credits);
        setRelease(data.release_dates);
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
            credits.cast.map((member: any, index: number) => (
              <LabelButton key={index} label={member.name} />
            ))}
          {activeLabel === 'crew' && (
            <Box>
              {credits.crew
                .filter(
                  (crew: any, index: number, self: any) =>
                    crew.known_for_department !== 'Acting' &&
                    index ===
                      self.findIndex(
                        (c: any) => c.known_for_department === crew.known_for_department,
                      ),
                )
                .map((crew, index) => (
                  <Box key={index} display="flex" alignItems="center">
                    <Typography color="#9ab">{crew.known_for_department}</Typography>
                    <Typography color="#9ab">{'.'.repeat(10)}</Typography>
                    <LabelButton label={crew.name} />
                  </Box>
                ))}
            </Box>
          )}
          {activeLabel === 'details' && (
            <Box display="flex" flexDirection="column" flexWrap="wrap">
              {details.map((detail, index) => (
                <Box key={index} display="flex" alignItems="center">
                  {detail.title && (
                    <>
                      <Typography color="#9ab">{detail.title}..........</Typography>
                      {Array.isArray(detail.name) &&
                        detail.name.length > 0 &&
                        detail.name.map((name, i) => <LabelButton key={i} label={name} />)}
                    </>
                  )}
                </Box>
              ))}
            </Box>
          )}
          {activeLabel === 'genres' &&
            movie?.genres.map((genre, index) => <LabelButton key={index} label={genre.name} />)}
          {activeLabel === 'releases' && (
            <>
              Sort by <Button></Button>
              {release.results
                ?.flatMap((result) => result.release_dates)
                .map((date, index) => (
                  <Box key={index} display="flex" flexDirection="row">
                    {date?.note && (
                      <>
                        <Typography color="#9ab">{date.note}</Typography>
                        <LabelButton
                          label={date.release_date.slice(0, 4) || 'No release date available'}
                        />
                      </>
                    )}
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
