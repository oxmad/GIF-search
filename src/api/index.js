import axios from "axios";

export const fetchImages = async value => {
  try {
    const {
      data: { data: result },
    } = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
      params: {
        q: value,
        limit: 150,
        api_key: process.env.REACT_APP_API_KEY,
      },
    });

    return result.map(item => ({
      id: item.id,
      title: item.title,
      url: item.images.downsized.url,
    }));
  } catch (e) {
    throw e;
  }
};
