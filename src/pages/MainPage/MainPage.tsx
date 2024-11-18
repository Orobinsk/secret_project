import { Carousel } from '../../components/carousel/Carousel';
import { ReleaseCalendar } from '../../components/ReleaseCalend/ReleaseCalendar';

export const MainPage = () => {
  return (
    <main data-testid="main-page">
      <Carousel />
      <ReleaseCalendar />
    </main>
  );
};
