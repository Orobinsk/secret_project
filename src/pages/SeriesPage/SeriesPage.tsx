import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SeriesDetails } from '../../types/seriesTypes';
import { getSeries } from '../../api/api';
import { imageSizes } from '../../constants';
import { ImageConfig } from '../../providers/ImageConfigProvider/ImageConfigContexts';

export const SeriesPage = () => {
  const { id } = useParams<{ id: string }>();
  const [series, setSeries] = useState<SeriesDetails>();
  const imageConfig = useContext(ImageConfig);

  useEffect(() => {
    if (id) {
      getSeries({
        id,
      }).then((data) => {
        setSeries(data);
      });
    }
  }, [id]);
  return (
    <>
      <h1 style={{ color: 'white' }}>{series?.name}</h1>
      <img
        src={`${imageConfig.images.secure_base_url}${imageSizes.original}${series?.poster_path}`}
        alt=""
        style={{ height: '400px' }}
      />
    </>
  );
};
