import { Route, Routes } from 'react-router-dom';
import TestPage from '../../pages/test/TestPage';
import { MainPage } from '../../pages/MainPage/MainPage';
import { FilmPage } from '../../pages/FilmPage/FilmPage';
import { App } from '../../components/App';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/main" element={<MainPage />} />
        <Route path="/about" element={<TestPage />} />
        <Route path="/film/:id" element={<FilmPage />} />
      </Route>
    </Routes>
  );
};
