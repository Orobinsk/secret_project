import Grid from '@mui/material/Grid';
import NoPhoto from '../../assets/nophoto.svg';
import { Box, Typography, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { createSearchStyles } from './createMediaCradStyles';
import { LabelButton } from '../../UIKit/LabelButton/LabelButton';
import { IMovieDiscover } from '../../types/movieTypes';
import { ICollection, ISearchPerson, ISearchTv } from '../../types/searchTypes';

type MediaItem = IMovieDiscover | ISearchPerson | ICollection | ISearchTv;

interface MediaListProps {
  media: MediaItem[];
}

export const MediaCard: React.FC<MediaListProps> = ({ media }) => {
  const theme = useTheme();
  const styles = createSearchStyles(theme);

  return (
    <>
      {media?.map((film: MediaItem) => (
        <Grid key={film.id} item xs={12}>
          <Box sx={styles.gridItemStyles}>
            <RouterLink
              to={`/film/${film.id}`}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                alignItems: 'flex-start',
              }}
            >
              <Box sx={styles.imgWrapperStyles}>
                {'poster_path' in film && film.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
                    alt="poster"
                    style={styles.imgStyles}
                  />
                ) : 'profile_path' in film && film.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/original/${film.profile_path}`}
                    alt="poster"
                    style={styles.imgStyles}
                  />
                ) : (
                  <img src={NoPhoto} alt="photo" style={styles.imgStyles} />
                  // <NoPhoto style={styles.imgStyles} />
                )}
              </Box>
            </RouterLink>
            <Box sx={{ ml: 2, flex: 1 }}>
              <Typography sx={styles.itemTitleStyle}>
                {'original_title' in film && film.original_title
                  ? film.original_title
                  : 'original_name' in film && film.original_name
                    ? film.original_name
                    : ''}
              </Typography>
              <Typography sx={styles.itemOverviewStyle} color="text.secondary">
                {'overview' in film && film.overview ? film.overview : ''}
              </Typography>
              {'known_for' in film && film.known_for?.length > 0 && (
                <Typography sx={styles.itemOverviewStyle}>
                  Star of:
                  {film.known_for.map((movie: MediaItem) =>
                    'original_title' in movie && movie.original_title ? (
                      <RouterLink key={movie.id} to={`/film/${movie.id}`}>
                        <LabelButton label={movie.original_title} />
                      </RouterLink>
                    ) : null,
                  )}
                </Typography>
              )}
            </Box>
          </Box>
        </Grid>
      ))}
    </>
  );
};
