import axios from "axios";

const API_KEY = '29842257-f781ca2767b35dbb86ba2fb42';
axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchImages = async ({ searchQuery = '', page = 1 }) => {
  const result = await axios.get(
    `/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return result.data.hits;
};

export default fetchImages;