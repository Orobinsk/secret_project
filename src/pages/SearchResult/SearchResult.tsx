import { Box, Grid, Typography, useTheme } from '@mui/material';
import { LabelButton } from '../../UIKit/LabelButton/LabelButton';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSearch } from '../../api/api';
import { API_SEARCH_ENDPOINTS, API_SEARCH_PARAMS } from '../../constants';
import { ICollection, ISearchPerson, ISearchTv } from '../../types/searchTypes';
import { IResponseList } from '../../api/apiTypes/apiTypes';
import { IMovieDiscover } from '../../types/movieTypes';
import { createSearchStyles } from './searchResultsStyles';
import { FilterButton } from '../../UIKit/FilterButton/FilterButton';
import { MediaCard } from '../../components/MediaCard/MediaCard';
import { TSearchEndpoint } from '../../api/apiTypes/apiSearchTypes';

export const mediaNames = {
  movie: 'Movie',
  actor: 'Actor',
  collection: 'Collection',
  series: 'Series',
  cast: 'Cast, Crew or Studios',
};

type SubFilterItem<T> = {
  label: string;
  endpoint: TSearchEndpoint;
  setter: (data: IResponseList<T>) => void;
};

export const SearchResult = () => {
  const theme = useTheme();
  const styles = createSearchStyles(theme);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [searchMovie, setSearchMovie] = useState<IResponseList<IMovieDiscover[]>>();
  const [searchPerson, setSearchPerson] = useState<IResponseList<ISearchPerson[]>>();
  const [searchCollection, setSearchCollection] = useState<IResponseList<ICollection[]>>();
  const [searchSeries, setSearchSeries] = useState<IResponseList<ISearchTv[]>>();
  const [activeLabel, setActiveLabel] = useState<string | null>(mediaNames.movie);

  const subFiltersItem: SubFilterItem<any>[] = [
    {
      label: mediaNames.movie,
      endpoint: API_SEARCH_ENDPOINTS.MOVIE,
      setter: (data: IResponseList<IMovieDiscover[]>) => setSearchMovie(data),
    },
    {
      label: mediaNames.actor,
      endpoint: API_SEARCH_ENDPOINTS.PERSON,
      setter: (data: IResponseList<ISearchPerson[]>) => setSearchPerson(data),
    },
    {
      label: mediaNames.collection,
      endpoint: API_SEARCH_ENDPOINTS.COLLECTION,
      setter: (data: IResponseList<ICollection[]>) => setSearchCollection(data),
    },
    {
      label: mediaNames.series,
      endpoint: API_SEARCH_ENDPOINTS.TV,
      setter: (data: IResponseList<ISearchTv[]>) => setSearchSeries(data),
    },
    {
      label: mediaNames.cast,
      endpoint: API_SEARCH_ENDPOINTS.PERSON,
      setter: (data: IResponseList<ISearchPerson[]>) => setSearchPerson(data),
    },
  ];

  useEffect(() => {
    const currentFilter = subFiltersItem.find(
      (item) => item.label === activeLabel,
    ) as SubFilterItem<any>;
    if (currentFilter) {
      getSearch({
        endpoint: currentFilter.endpoint,
        params: { [API_SEARCH_PARAMS.QUERY]: query },
      }).then(currentFilter.setter);
    }
  }, [query, activeLabel]);

  const handleChange = (subfiltersItem: string) => {
    setActiveLabel(subfiltersItem);
  };

  function filterActors() {
    const actors = searchPerson?.results?.filter(
      (person) => person.known_for_department === 'Acting',
    );
    return actors || [];
  }
  function filterCast() {
    const cast = searchPerson?.results?.filter(
      (person) => person.known_for_department !== 'Acting',
    );
    return cast || [];
  }

  return (
    <Grid container spacing={1} width="100%" display="flex" flexWrap="nowrap" margin="10px">
      <Grid flexGrow="1" item>
        <Box sx={styles.movieListHeader}>
          <Typography sx={styles.headerTextStyle}>
            SHOWING MATCHES FOR {`"${query.toUpperCase()}"`}
          </Typography>
          <Box sx={styles.filterMenuStyles}>
            <FilterButton onChange={handleChange} item={subFiltersItem.map((item) => item.label)} />
          </Box>
        </Box>
        {activeLabel === mediaNames.movie && searchMovie && searchMovie?.results?.length > 0 && (
          <MediaCard media={searchMovie.results} mediaName={mediaNames.movie} />
        )}
        {activeLabel === mediaNames.series && searchSeries && searchSeries?.results?.length > 0 && (
          <MediaCard media={searchSeries.results} mediaName={mediaNames.series} />
        )}
        {activeLabel === mediaNames.collection &&
          searchCollection &&
          searchCollection?.results?.length > 0 && (
            <MediaCard media={searchCollection.results} mediaName={mediaNames.collection} />
          )}
        {activeLabel === mediaNames.actor && filterActors().length > 0 && (
          <MediaCard media={filterActors()} mediaName={mediaNames.actor} />
        )}
        {activeLabel === mediaNames.cast && filterCast()?.length > 0 && (
          <MediaCard media={filterCast()} mediaName={mediaNames.cast} />
        )}
      </Grid>
      <Grid item sx={styles.filterDrid}>
        <Box sx={styles.movieListHeader}>
          <Typography sx={styles.headerTextStyle}>SHOW RESULTS FOR</Typography>
        </Box>
        <Grid container spacing={1} display="flex" flexDirection="column" pt="10px">
          {subFiltersItem.map((item, i) => (
            <Grid item key={i}>
              <LabelButton
                isActive={activeLabel === item.label}
                changeLabel={() => handleChange(item.label)}
                label={item.label}
                searchProp
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
