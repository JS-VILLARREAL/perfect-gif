import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category: string) => {
  const [images, seTimages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const images = await getGifs(category);
    seTimages(images);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();

    // eslint-disable-next-line
  }, []);

  return {
    images,
    isLoading,
  };
};
