import { Box, Grid, Typography, useTheme } from '@mui/material';
import { LabelButton } from '../../UIKit/LabelButton/LabelButton';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSearch } from '../../api/api';
import { API_SEARCH_ENDPOINTS, API_SEARCH_PARAMS } from '../../constants';
import { ICollection, ISearchPerson } from '../../types/searchTypes';
import { IResponseList } from '../../api/apiTypes/apiTypes';
import { IMovieDiscover } from '../../types/movieTypes';
import { createSearchStyles } from './searchResults';
import { FilterButton } from '../../UIKit/FilterButton/FilterButton';
import { MediaCard } from '../../components/MediaCard/MediaCard';
const SUBFILTERSITEM = ['Films', 'Actor', 'Collection', 'Cast, Crew or Studios', 'Series'];

export const SearchResult = () => {
  const theme = useTheme();
  const styles = createSearchStyles(theme);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [searchMovie, setSearchMovie] = useState<IResponseList<IMovieDiscover[]>>();
  const [searchPerson, setSearchPerson] = useState<IResponseList<ISearchPerson[]>>();
  const [searchCollection, setSearchCollection] = useState<IResponseList<ICollection[]>>();
  const [searchSeries, setSearchSeries] = useState<IResponseList<ICollection[]>>();
  const [activeLabel, setActiveLabel] = useState<string | null>(SUBFILTERSITEM[0]);

  useEffect(() => {
    getSearch({
      endpoint: API_SEARCH_ENDPOINTS.MOVIE,
      params: { [API_SEARCH_PARAMS.QUERY]: query },
    }).then((data) => {
      setSearchMovie(data);
    });

    getSearch({
      endpoint: API_SEARCH_ENDPOINTS.PERSON,
      params: { [API_SEARCH_PARAMS.QUERY]: query },
    }).then((data) => {
      setSearchPerson(data);
    });

    getSearch({
      endpoint: API_SEARCH_ENDPOINTS.COLLECTION,
      params: { [API_SEARCH_PARAMS.QUERY]: query },
    }).then((data) => {
      setSearchCollection(data);
    });
    getSearch({
      endpoint: API_SEARCH_ENDPOINTS.TV,
      params: { [API_SEARCH_PARAMS.QUERY]: query },
    }).then((data) => {
      setSearchSeries(data);
    });
  }, [query]);
  console.log(searchSeries);
  const handleChange = (subfiltersItem: string) => {
    setActiveLabel(subfiltersItem);
  };

  function filterActors() {
    return searchPerson?.results?.filter((person) => person.known_for_department === 'Acting');
  }
  function filterCast() {
    return searchPerson?.results?.filter((person) => person.known_for_department !== 'Acting');
  }

  return (
    <Grid
      container
      spacing={1}
      sx={{
        width: '100%',
        display: 'flex',
        flexWrap: 'nowrap',
      }}
      margin="10px"
    >
      <Grid item sx={{ flexGrow: 1 }}>
        <Box sx={styles.movieListHeader}>
          <Typography sx={styles.headerTextStyle}>
            SHOWING MATCHES FOR {`"${query.toUpperCase()}"`}
          </Typography>
          <Box sx={styles.filterMenuStyles}>
            <FilterButton onChange={handleChange} item={SUBFILTERSITEM} />
          </Box>
        </Box>
        {activeLabel === 'Films' && searchMovie?.results?.length > 0 && (
          <MediaCard media={searchMovie.results} />
        )}
        {activeLabel === 'Series' && searchSeries?.results?.length > 0 && (
          <MediaCard media={searchSeries.results} />
        )}
        {activeLabel === 'Collection' && searchCollection?.results?.length > 0 && (
          <MediaCard media={searchCollection.results} />
        )}
        {activeLabel === 'Actor' && filterActors()?.length > 0 && (
          <MediaCard media={filterActors()} />
        )}
        {activeLabel === 'Cast, Crew or Studios' && filterCast()?.length > 0 && (
          <MediaCard media={filterCast()} />
        )}
      </Grid>
      <Grid item sx={styles.filterDrid}>
        <Box sx={styles.movieListHeader}>
          <Typography sx={styles.headerTextStyle}>SHOW RESULTS FOR</Typography>
        </Box>
        <Grid container spacing={1} display="flex" flexDirection="column" pt="10px">
          {SUBFILTERSITEM.map((item, i) => (
            <Grid item key={i}>
              <LabelButton changeLabel={() => handleChange(item)} label={item} searchProp />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
