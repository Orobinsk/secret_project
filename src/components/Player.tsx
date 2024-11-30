import { useEffect } from 'react';

interface IPlayer {
  imdbId: string;
}

export const Player = ({ imdbId }: IPlayer) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://kinobox.tv/kinobox.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      //@ts-expect-error /kbox have type unknown
      if (window.kbox) {
        //@ts-expect-error /kbox have type unknown
        window.kbox('.kinobox_player', { search: { imdb: imdbId } });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [imdbId]);

  return <div className="kinobox_player"></div>;
};
