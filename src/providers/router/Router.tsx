import { Route, Routes } from 'react-router-dom';
import TestPage from '../../pages/test/TestPage';
import { MainPage } from '../../pages/MainPage/MainPage';
import { FilmPage } from '../../pages/FilmPage/FilmPage';
import { App } from '../../components/App';
import { SearchResult } from '../../pages/SearchResult/SearchResult';
import { ListOfMovies } from '../../pages/ListOfMovies/ListOfMovies';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<MainPage />} />
        <Route path="about" element={<TestPage />} />
        <Route path="film/:id" element={<FilmPage />} />
        <Route path="search" element={<SearchResult />} />
        <Route path="lists" element={<ListOfMovies />} />
      </Route>
    </Routes>
  );
};
