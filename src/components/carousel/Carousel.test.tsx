import { render, fireEvent, screen } from '@testing-library/react';
import { Carousel } from './Carousel';

test('loads items eventually', async () => {
  render(<Carousel />);

  // нажали на кнопку 'POPULAR FILMS THIS WEEK'
  fireEvent.click(screen.getByText('POPULAR FILMS THIS WEEK'));

  // проверяем что отрисована 1 кнопка надписью 'POPULAR FILMS THIS WEEK'
  const items = await screen.findAllByText('POPULAR FILMS THIS WEEK');
  expect(items).toHaveLength(1);
});
