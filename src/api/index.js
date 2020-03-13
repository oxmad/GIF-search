import axios from 'axios';

export const loadData = async value => {
  try {
    const apiKey = 'SccsoCNcduBUF6EiYr9iHKfb90UuRRbQ&limit=150';

    const {
      data: { data: result },
    } = await axios.get(
      `https://api.giphy.com/v1/gifs/search?q=${value}&api_key=${apiKey}`,
    );

    return result.map(item => ({
      id: item.id,
      title: item.title,
      url: item.images.downsized.url,
    }));
  } catch (e) {
    console.log(e);
  }
};
