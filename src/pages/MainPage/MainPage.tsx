import { Carousel } from '../../components/carousel/Carousel';
import { ReleaseCalendar } from '../../components/ReleaseCalend/ReleaseCalendar';

export const MainPage = () => {
  return (
    <section data-testid="main-page">
      <Carousel />
      <ReleaseCalendar />
    </section>
  );
};
