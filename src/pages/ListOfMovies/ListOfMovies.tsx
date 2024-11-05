import { Box, Grid, Pagination, PaginationItem, Typography } from '@mui/material';
import { createListOfMoviesStyles } from './createListOfMoviesStyles';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { IResponseList } from '../../api/apiTypes/apiTypes';
import { IMovieDiscover } from '../../types/movieTypes';
import { getGenres, getMovieList } from '../../api/api';
import { ImageConfig } from '../../providers/ImageConfigProvider/ImageConfigContexts';
import { API_MOVIE_LIST_PARAMS, imageSizes, SORT_BY } from '../../constants';
import { Link as RouterLink } from 'react-router-dom';
import { DropDownMenu, TOption } from './DropDownMenu/DropDownMenu';
import { IGenresDetails } from '../../api/apiTypes/apiGenresTypes';

const styles = createListOfMoviesStyles();
const DEFAULT_GENRE: IGenresDetails[] = [{ id: null, name: 'All Genres' }];

export const ListOfMovies = () => {
  const [movieList, setMovieList] = useState<IResponseList<IMovieDiscover[]>>();
  const [activeSortBy, setActiveSortBy] = useState<TOption>(SORT_BY[0]);
  const [genresList, setGenresList] = useState<IGenresDetails[]>(DEFAULT_GENRE);
  const [activeGenre, setActiveGenre] = useState<IGenresDetails>(DEFAULT_GENRE[0]);
  const [page, setPage] = useState(1);

  const handleChange = (event: ChangeEvent, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    getGenres().then((data) => setGenresList((prev) => [...prev, ...data.genres]));
  }, []);

  function isSortByValue(option: TOption): option is { label: string; value: string } {
    return 'value' in option;
  }

  useEffect(() => {
    getMovieList({
      params: {
        [API_MOVIE_LIST_PARAMS.WITH_GENRES]: activeGenre.id,
        [API_MOVIE_LIST_PARAMS.PAGE]: page,
        [API_MOVIE_LIST_PARAMS.SORT_BY]: isSortByValue(activeSortBy) ? activeSortBy.value : '',
      },
    }).then((data) => setMovieList(data));
  }, [page, activeSortBy, activeGenre]);

  const Header = () => {
    const handleChangeSort = (sort: TOption) => {
      setActiveSortBy(sort);
      setPage(1);
    };

    const handleChangeActiveGenre = (genre: IGenresDetails) => {
      setActiveGenre(genre);
      setPage(1);
    };

    return (
      <Grid item sx={styles.itemWrapperStyles}>
        <Typography sx={styles.headerTypographyStyles}>FILMS</Typography>
        <Box display="flex" justifyContent="center">
          <DropDownMenu onChange={handleChangeSort} items={SORT_BY} activeItem={activeSortBy} />
          <DropDownMenu
            onChange={handleChangeActiveGenre}
            items={genresList}
            activeItem={activeGenre}
          />
        </Box>
      </Grid>
    );
  };

  const MovieBox = ({ movieList }: { movieList?: IMovieDiscover[] }) => {
    const imageConfig = useContext(ImageConfig);

    const movieElements = movieList?.map((movie) => (
      <Grid item xs={6} sm={3} md={2.4} lg={2.4} key={movie.id} sx={styles.posterImgStyles}>
        <RouterLink to={`/film/${movie.id}`}>
          {movie.poster_path ? (
            <img
              src={`${imageConfig.images.secure_base_url}${imageSizes.medium}${movie.poster_path}`}
              alt={movie.title}
              style={styles.imgStyles}
            />
          ) : (
            <Box sx={styles.imgStyles}>{movie.original_title}</Box>
          )}
        </RouterLink>
      </Grid>
    ));

    return (
      <Grid item container pt={1}>
        {movieElements}
      </Grid>
    );
  };

  return (
    <Grid container sx={styles.wrapperStyles}>
      <Header />
      <MovieBox movieList={movieList?.results} />
      <Box pt={1}>
        <Pagination
          count={movieList?.total_pages}
          page={page}
          color="primary"
          onChange={handleChange}
          size="large"
          renderItem={(item) => {
            if (item.type === 'previous' || item.type === 'next') {
              return <PaginationItem {...item} />;
            }
            return null;
          }}
        />
      </Box>
    </Grid>
  );
};
