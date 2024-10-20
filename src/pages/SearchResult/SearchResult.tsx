import { Grid, Typography, useTheme } from '@mui/material';
import createSearchStyles from './searchResults';
import { LabelButton } from '../../UIKit/LabelButton/LabelButton';
import { useSearchParams } from 'react-router-dom';

export const SearchResult = () => {
  const theme = useTheme();
  const styles = createSearchStyles(theme);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const subfiltersItem = [
    'All',
    'Films',
    'Reviews',
    'Lists',
    'Original Lists',
    'Stories',
    'Cast, Crew or Studios',
    'Members or HQs',
    'Tags',
    'Journal articles',
    'Podcast episodes',
    'Full-text search',
  ];

  const Subfilters = () => {
    return (
      <Grid item xs={12} sm={2}>
        <Typography sx={styles.typographyHeaderStyle}>SHOW RESULTS FOR</Typography>
        <ItemCategories />
      </Grid>
    );
  };

  const ItemCategories = () => {
    return (
      <Grid container direction="column" spacing={1} pt="5px">
        {subfiltersItem.map((item, i) => (
          <Grid item key={i} xs={12}>
            <LabelButton label={item} searchProp />
          </Grid>
        ))}
      </Grid>
    );
  };

  const SearchResults = () => {
    return (
      <Grid item xs={12} sm={9} sx={{ marginRight: 1 }}>
        <Typography sx={styles.typographyHeaderStyle}>
          SHOWING MATCHES FOR {`"${query.toUpperCase()}"`}
        </Typography>
      </Grid>
    );
  };

  return (
    <Grid container spacing={2} direction="row" pt="50px">
      <SearchResults />
      <Subfilters />
    </Grid>
  );
};
