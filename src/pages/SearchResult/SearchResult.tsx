import { Box, Grid, Typography, useTheme } from '@mui/material';
import createSearchStyles from './searchResults';
import { LabelButton } from '../../UIKit/LabelButton/LabelButton';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSearch } from '../../api/api';
import { API_SEARCH_ENDPOINTS, API_SEARCH_PARAMS } from '../../constants';
import { ICollection, ISearchPerson } from '../../types/searchTypes';
import { IResponseList } from '../../api/apiTypes/apiTypes';
import { Link as RouterLink } from 'react-router-dom';
import Ava from '../../assets/ava.png';
import { IMovieDiscover } from '../../types/movieTypes';
export const SearchResult = () => {
  const subfiltersItem = [
    'All',
    'Films',
    'Actors',
    'Reviews',
    'Collection',
    'Cast, Crew or Studios',
    'Tags',
    // 'Podcast episodes',
    // 'Full-text search',
  ];
  const theme = useTheme();
  const styles = createSearchStyles(theme);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [searchMovie, setSearchMovie] = useState<IResponseList<IMovieDiscover[]>>();
  const [searchActors, setSearchActors] = useState<IResponseList<ISearchPerson[]>>();
  const [searchCollection, setSearchCollection] = useState<IResponseList<ICollection[]>>();
  const [activeLabel, setActiveLabel] = useState<string | null>(subfiltersItem[0]);

  useEffect(() => {
    if (query) {
      getSearch({
        endpoint: API_SEARCH_ENDPOINTS.MOVIE,
        params: { [API_SEARCH_PARAMS.QUERY]: query },
      })
        .then((data) => {
          setSearchMovie(data);
        })
        .catch((error) => {
          console.error('Error fetching search results:', error);
        });

      getSearch({
        endpoint: API_SEARCH_ENDPOINTS.PERSON,
        params: { [API_SEARCH_PARAMS.QUERY]: query },
      })
        .then((data) => {
          setSearchActors(data);
        })
        .catch((error) => {
          console.error('Error fetching artist search results:', error);
        });
      getSearch({
        endpoint: API_SEARCH_ENDPOINTS.COLLECTION,
        params: { [API_SEARCH_PARAMS.QUERY]: query },
      })
        .then((data) => {
          setSearchCollection(data);
        })
        .catch((error) => {
          console.error('Error fetching artist search results:', error);
        });
    }
  }, [query]);

  const handleChange = (subfiltersItem: string) => {
    setActiveLabel(subfiltersItem);
  };
  const Subfilters = () => {
    return (
      <Grid item xs={12} sm={2}>
        <Typography sx={styles.typographyHeaderStyle}>SHOW RESULTS FOR </Typography>
        <Grid container direction="column" spacing={1} pt="5px">
          {subfiltersItem.map((item, i) => (
            <Grid item key={i} xs={12}>
              <LabelButton onClick={() => handleChange(item)} label={item} searchProp />
            </Grid>
          ))}
        </Grid>
      </Grid>
    );
  };

  const SearchResults = () => {
    return (
      <Grid item xs={12} sm={9} sx={{ marginRight: 1 }}>
        <Typography sx={styles.typographyHeaderStyle}>
          SHOWING MATCHES FOR {`"${query.toUpperCase()}"`}
        </Typography>
        <Grid container width="100%">
          {activeLabel === 'All' && (
            <>
              {SearchMovies()}
              {SearchActors()}
            </>
          )}
          {activeLabel === 'Films' && SearchMovies()}
          {activeLabel === 'Actors' && SearchActors()}
          {activeLabel === 'Collection' && SearcCollection()}
        </Grid>
      </Grid>
    );
  };
  const SearchMovies = () => {
    return (
      <>
        {searchMovie?.results?.map((film: any) => (
          <Grid key={film.id} item sx={{ display: 'flex', m: 1 }}>
            <Grid item sx={styles.gridItemStyles}>
              {film.poster_path ? (
                <RouterLink to={`/film/${film.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${film.poster_path}`}
                    alt={film.title}
                    style={styles.imgStyles}
                  />
                </RouterLink>
              ) : (
                <img
                  src={Ava}
                  alt={film.title}
                  style={{
                    width: '133.3px',
                    height: '200px',
                    objectFit: 'cover',
                    cursor: 'pointer',
                  }}
                />
              )}
            </Grid>
            <Grid sx={{ pl: 2 }}>
              <Box display="flex" alignItems="center">
                <RouterLink
                  to={`/film/${film.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Typography sx={styles.itemTitleStyle}>{film.original_title}</Typography>
                </RouterLink>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {film.overview}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </>
    );
  };
  const SearchActors = () => {
    return (
      <>
        {searchActors?.results?.map((person: any) => (
          <Grid container key={person.id}>
            <Grid item sx={styles.gridItemStyles}>
              {person.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original/${person.profile_path}`}
                  alt={person.name}
                  style={styles.imgStyles}
                />
              ) : (
                <img
                  src={Ava}
                  alt={person.name}
                  style={{
                    width: '133.3px',
                    height: '200px',
                    objectFit: 'cover',
                    cursor: 'pointer',
                  }}
                />
              )}
            </Grid>
            <Grid item sx={{ pl: 2 }}>
              <Typography sx={styles.itemTitleStyle}>{person.name}</Typography>
              <Typography sx={styles.itemTitleStyle}>
                Star of
                {person.known_for?.length > 0 &&
                  person.known_for.map((movie: any) =>
                    movie.original_title ? (
                      <RouterLink key={movie.id} to={`/film/${movie.id}`}>
                        <LabelButton label={movie.original_title} />
                      </RouterLink>
                    ) : null,
                  )}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </>
    );
  };
  const SearcCollection = () => {
    return (
      <>
        {searchCollection?.results?.map((item: any) => (
          <Grid container key={item.id} sx={{ m: 1 }}>
            <Grid item sx={styles.gridItemStyles}>
              <img
                src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                alt={item.name}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              />
            </Grid>

            <Grid item xs={9} sx={{ pl: 2 }}>
              <Typography
                variant="h6"
                color="white"
                sx={{
                  mt: 1,
                  '&:hover': {
                    color: '#41BCF4',
                  },
                }}
              >
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.overview}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </>
    );
  };

  return (
    <Grid container spacing={2} direction="row" pt="50px">
      <SearchResults />
      <Subfilters />
    </Grid>
  );
};
