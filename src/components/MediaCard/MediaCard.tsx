import Grid from '@mui/material/Grid';
import { Box, Typography, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { createSearchStyles } from './createMediaCradStyles';
import { IMovieDiscover } from '../../types/movieTypes';
import { ICollection, ISearchPerson, ISearchTv } from '../../types/searchTypes';
import Nophoto from '../../assets/nophoto.svg';
import { FC } from 'react';
import { useMediaDetails } from './useMediaDetails';

type MediaItem = IMovieDiscover | ISearchPerson | ICollection | ISearchTv;

interface MediaListProps {
  media: MediaItem[];
  mediaName: string;
}

export const MediaCard: FC<MediaListProps> = ({ media, mediaName }) => {
  const theme = useTheme();
  const styles = createSearchStyles(theme);

  return (
    <>
      {media.map((film: MediaItem) => {
        const { imageSource, titleSource, overviewSource } = useMediaDetails(film, mediaName);

        return (
          <Grid key={film.id} item xs={12}>
            <Box sx={styles.gridItemStyles}>
              <RouterLink to={`/film/${film.id}`} style={styles.routerLinkStyles}>
                <Box sx={styles.imgWrapperStyles}>
                  {imageSource ? (
                    <img src={imageSource} alt="poster" style={styles.imgStyles} />
                  ) : (
                    <Nophoto width="100%" height="100%" />
                  )}
                </Box>
              </RouterLink>
              <Box ml={2} flex={1}>
                <Typography sx={styles.itemTitleStyle}>{titleSource}</Typography>
                <Typography sx={styles.itemOverviewStyle} color="text.secondary">
                  {overviewSource}
                </Typography>
              </Box>
            </Box>
          </Grid>
        );
      })}
    </>
  );
};
