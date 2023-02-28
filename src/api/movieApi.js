import axiosService from "./axiosConfig";

export const category = {
  movie: "movie",
  tv: "tv",
};
export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

const tmdbApi = {
  ///https://api.themoviedb.org/3/discover/movie?api_key=key&with_genres=35
  getMediaByGenres: (type, paramsObj) => {
    const url = `discover/${category[type]}`;
    return axiosService.get(url, paramsObj);
  },
  detail: (confUrl, param) => {
    const url = `${confUrl}`;
    return axiosService.get(url, param);
  },
  /// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
  credits: (confUrl, param) => {
    const url = `${confUrl}/credits`;
    return axiosService.get(url, param);
  },
  /// https://api.themoviedb.org/3/movie/latest?api_key=api_key
  getLatestMovies: (type) => {
    const url = `${category[type]}/latest?`;
    return axiosService.get(url, {});
  },
  /// https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=<<api_key>>
  similar: (confUrl, param) => {
    const url = `${confUrl}/similar`;
    return axiosService.get(url, param);
  },
};

export default tmdbApi;
