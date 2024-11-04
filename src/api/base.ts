import axios from 'axios';

const apiKey = process.env.TMDB_KEY;

export const apiTMDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`,
  },
});

export const setupAxiosInterceptors = (showError: (message: string) => void) => {
  apiTMDB.interceptors.response.use(
    (response) => response,
    (error) => {
      const message = error.response?.data?.status_message || 'Network error';
      showError(message);
      return Promise.reject(error);
    },
  );
};
