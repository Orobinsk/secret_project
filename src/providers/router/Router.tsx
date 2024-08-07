import { Route, Routes } from 'react-router-dom';
import { App } from '../../components/App';
import TestPage from '../../pages/test/TestPage';
import { FilmPage } from '../../pages/FilmPage/FilmPage';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/about" element={<TestPage />} />
        <Route path="/film/:id" element={<FilmPage />} />
      </Route>
    </Routes>
  );
};
