import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MainPage } from '../../pages/MainPage/MainPage';
import { FilmPage } from '../../pages/FilmPage/FilmPage';
import { SearchResult } from '../../pages/SearchResult/SearchResult';
import { ListOfMovies } from '../../pages/ListOfMovies/ListOfMovies';
import { ActorsPage } from '../../pages/ActorsPage/ActorsPage';
import { App } from '../../components/App';

describe('smoke-router-test', function () {
  test('App component is rendered', async () => {
    render(
      <Router>
        <App />
      </Router>,
    );

    const appComponent = screen.getByTestId('app');
    expect(appComponent).toBeInTheDocument();
  });
  test('Main page component is rendered', async () => {
    render(
      <Router>
        <MainPage />
      </Router>,
    );

    const appComponent = screen.getByTestId('main-page');
    expect(appComponent).toBeInTheDocument();
  });
  test('Film page component is rendered', async () => {
    render(
      <Router>
        <FilmPage />
      </Router>,
    );

    const appComponent = screen.getByTestId('film-page');
    expect(appComponent).toBeInTheDocument();
  });
  test('Search result component is rendered', async () => {
    render(
      <Router>
        <SearchResult />
      </Router>,
    );

    const appComponent = screen.getByTestId('search-page');
    expect(appComponent).toBeInTheDocument();
  });
  test('List of movies  component is rendered', async () => {
    render(
      <Router>
        <ListOfMovies />
      </Router>,
    );

    const appComponent = screen.getByTestId('list-page');
    expect(appComponent).toBeInTheDocument();
  });
  test('Actors page  component is rendered', async () => {
    render(
      <Router>
        <ActorsPage />
      </Router>,
    );

    const appComponent = screen.getByTestId('actors-page');
    expect(appComponent).toBeInTheDocument();
  });
});
