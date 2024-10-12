import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Carousel } from './Carousel';
import { getMovieList } from '../../api/api';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

jest.mock('../../api/api');

const mockMovieData = {
  results: [
    { id: 1, poster_path: '/path1.jpg' },
    { id: 2, poster_path: '/path2.jpg' },
    { id: 3, poster_path: '/path3.jpg' },
    { id: 4, poster_path: '/path4.jpg' },
    { id: 5, poster_path: '/path5.jpg' },
    { id: 6, poster_path: '/path6.jpg' },
    { id: 7, poster_path: '/path7.jpg' },
    { id: 8, poster_path: '/path8.jpg' },
    { id: 9, poster_path: '/path9.jpg' },
    { id: 10, poster_path: '/path10.jpg' },
    { id: 11, poster_path: '/path11.jpg' },
    { id: 12, poster_path: '/path12.jpg' },
  ],
};

describe('Carousel', () => {
  beforeEach(() => {
    (getMovieList as jest.Mock).mockResolvedValue(mockMovieData);
  });

  test('4 pictures per page and correct images are displayed', async () => {
    render(
      <BrowserRouter>
        <Carousel />
      </BrowserRouter>,
    );

    const images = await waitFor(() => screen.findAllByTestId(/^movie-poster-/));

    expect(images).toHaveLength(4);

    const expectedImageSources = [
      'https://image.tmdb.org/t/p/original/path1.jpg',
      'https://image.tmdb.org/t/p/original/path2.jpg',
      'https://image.tmdb.org/t/p/original/path3.jpg',
      'https://image.tmdb.org/t/p/original/path4.jpg',
    ];

    images.forEach((img, index) => {
      expect(img).toHaveAttribute('src', expectedImageSources[index]);
    });
  });

  test('switching pictures', async () => {
    render(
      <BrowserRouter>
        <Carousel />
      </BrowserRouter>,
    );

    const images = await waitFor(() => screen.findAllByTestId(/^movie-poster-/));
    expect(images).toHaveLength(4);

    const nextButton = screen.getByTestId('carousel-slide-next');
    fireEvent.click(nextButton);

    const updatedImages = await waitFor(() => screen.findAllByTestId(/^movie-poster-/));

    expect(updatedImages).toHaveLength(4);

    expect(updatedImages[0]).toHaveAttribute(
      'src',
      'https://image.tmdb.org/t/p/original/path5.jpg',
    );

    const prevButton = screen.getByTestId('carousel-slide-previous');
    fireEvent.click(prevButton);

    const revertedImages = await waitFor(() => screen.findAllByTestId(/^movie-poster-/));

    expect(revertedImages).toHaveLength(4);
    expect(revertedImages[0]).toHaveAttribute(
      'src',
      'https://image.tmdb.org/t/p/original/path1.jpg',
    );
  });
});
