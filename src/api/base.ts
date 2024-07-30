import axios from 'axios';

const apiKey = process.env.TMDB_KEY;

export const apiTMDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`,
  },
});
