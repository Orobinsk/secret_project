interface MovieTrailerProps {
  youtubeKey: string;
  autoplay?: boolean;
}

export const MovieTrailer = ({ youtubeKey, autoplay }: MovieTrailerProps) => {
  return (
    <iframe
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${youtubeKey}?autoplay=${autoplay ? 1 : 0}`}
      title="YouTube video player"
      style={{ border: 'none', display: 'block' }}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};
