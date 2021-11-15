// Configuration for TMDB API

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'REACT_APP_API_KEY';
// const API_KEY = process.env.REACT_APP_API_KEY;




const searchBaseURL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const popularBaseURL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;

// For login and voting
const requestTokenURL = `${API_URL}authentication/token/new?api_key=${API_KEY}`;
const loginURL = `${API_URL}authentication/token/new?api_key=${API_KEY}`;
const sessionID_URL = `${API_URL}authentication/session/new?api_key=${API_KEY}`;

// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
const imageBaseURL = 'https://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const backdropSize = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const posterSize = 'w780';

export {
    searchBaseURL,
    popularBaseURL,

    API_URL,
    API_KEY,

    requestTokenURL,
    loginURL,
    sessionID_URL,

    imageBaseURL,
    backdropSize,
    posterSize

};