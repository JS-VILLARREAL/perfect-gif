interface GifFetch {
  id: string;
  title: string;
  url: string;
  images: {
    downsized_medium: {
      url: string;
    };
  };
}

const GIFT_ENDPOINT_URL = 'https://api.giphy.com/v1/gifs/search?';
const apiKey = import.meta.env.VITE_GIPHY_APY_KEY;

export const getGifs = async (category: string) => {
  const url = `${GIFT_ENDPOINT_URL}api_key=${apiKey}&q=${category}&limit=6`;
  const response = await fetch(url).then((res) => res.json());
  const { data } = response;

  const gifs = data.map((img: GifFetch) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url,
  }));

  return gifs;
};
