import Grid from '@mui/material/Grid';
import NoPhoto from '../../assets/nophoto.svg';
import { Box, Typography, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { createSearchStyles } from './createMediaCradStyles';
import { LabelButton } from '../../UIKit/LabelButton/LabelButton';

interface MediaItem {
  id: number;
  poster_path?: string;
  original_title?: string;
  original_name?: string;
  name?: string;
  overview?: string;
  profile_path?: string;
  known_for?: Array<{ id: number; original_title?: string }>;
  known_for_department?: string;
}

interface MediaListProps {
  media: MediaItem[];
}

export const MediaCard: React.FC<MediaListProps> = ({ media }) => {
  const theme = useTheme();
  const styles = createSearchStyles(theme);

  return (
    <>
      {media?.map((film: any) => (
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
                {film.poster_path || film.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/original/${film.poster_path || film.profile_path}`}
                    alt={film.original_title || film.name}
                    style={styles.imgStyles}
                  />
                ) : (
                  <NoPhoto style={styles.imgStyles} />
                )}
              </Box>
            </RouterLink>
            <Box sx={{ ml: 2, flex: 1 }}>
              <Typography sx={styles.itemTitleStyle}>
                {film.original_title || film.original_name}
              </Typography>
              <Typography color="text.secondary">{film.overview}</Typography>
              {film.known_for && film.known_for.length > 0 && (
                <Typography variant="body2" color="text.secondary">
                  Star of:
                  {film.known_for.map((movie: any) =>
                    movie.original_title ? (
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
