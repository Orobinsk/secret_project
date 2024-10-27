import { useEffect, useState, FC, ReactNode } from 'react';
import { getImageConfig } from '../../api/api';
import { IImageConfig } from '../../api/apiTypes/apiTypes';
import { defaultImageConfig, ImageConfig } from './ImageConfigContexts';

export const ImageConfigProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [imageConfig, setImageConfig] = useState<IImageConfig>(defaultImageConfig);

  useEffect(() => {
    getImageConfig().then((data) => setImageConfig(data));
  }, []);

  return <ImageConfig.Provider value={imageConfig}>{children}</ImageConfig.Provider>;
};
