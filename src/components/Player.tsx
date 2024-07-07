import { useEffect } from 'react';

interface IPlayer {
  query: string;
}

export const Player = ({ query }: IPlayer) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://kinobox.tv/kinobox.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      //@ts-expect-error /kbox have type unknown
      if (window.kbox) {
        //@ts-expect-error /kbox have type unknown
        window.kbox('.kinobox_player', { search: { query: query } });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [query]);

  return <div className="kinobox_player"></div>;
};
