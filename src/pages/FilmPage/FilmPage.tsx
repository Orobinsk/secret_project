import { useParams } from 'react-router-dom';
import { Player } from '../../components/Player';

export const FilmPage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      film page
      <Player query="место под соснами" />
    </div>
  );
};
