import Grid from '@mui/material/Grid';
import { Box, Typography, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { createSearchStyles } from './createMediaCradStyles';
import { IMovieDiscover } from '../../types/movieTypes';
import { ICollection, ISearchPerson, ISearchTv } from '../../types/searchTypes';
import Nophoto from '../../assets/nophoto.svg';
import { FC } from 'react';
import { useMediaDetails } from './useMediaDetails';
import { mediaNames } from './../../pages/SearchResult/SearchResult';

type TMediaItem = IMovieDiscover | ISearchPerson | ICollection | ISearchTv;
type TMediaNames = (typeof mediaNames)[keyof typeof mediaNames];

interface MediaListProps {
  mediaList: TMediaItem[];
  mediaName: string;
}
const getLink = (mediaName: TMediaNames) => {
  switch (mediaName) {
    case mediaNames.actor:
    case mediaNames.cast:
      return '/person/';
    case mediaNames.movie:
      return '/film/';
    default:
      return '/';
  }
};

export const MediaCard: FC<MediaListProps> = ({ mediaList, mediaName }) => {
  const theme = useTheme();
  const styles = createSearchStyles(theme);

  return (
    <>
      {mediaList.map((mediaItem: TMediaItem) => {
        const { imageSource, titleSource, overviewSource } = useMediaDetails(mediaItem, mediaName);

        return (
          <Grid key={mediaItem.id} item xs={12}>
            <Box sx={styles.gridItemStyles}>
              <RouterLink
                to={`${getLink(mediaName)}${mediaItem.id}`}
                style={styles.routerLinkStyles}
              >
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
