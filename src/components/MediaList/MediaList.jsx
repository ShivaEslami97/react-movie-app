import React, { useEffect, useState } from "react";
import tmdbApi from "../../api/movieApi";
import useAxios from "../../hooks/useAxios";
import MovieGrid from "../MovieGrid/MovieGrid";
import Loading from "../Loading/Loading";

const MovieList = ({ genre, cate }) => {
  const [items, setItems] = useState([]);
  const { error, isLoading, fetchData } = useAxios(true);
  const genreNum = cate === "movie" ? genre.movieId : genre.tvId;

  useEffect(() => {
    const handleData = (data) => {
      setItems(data.results);
    };
    let paramConfig = {
      sort_by: "popularity.desc",
      page: 1,
      with_original_language: "en",
    };
    if (!genre.genre) {
      paramConfig.with_genres = genreNum;
    }
    fetchData(
      {
        axiosInstance: tmdbApi.getMediaByGenres,
        config: { url: `${cate}`, param: paramConfig },
      },
      handleData
    );
  }, [fetchData, genre.genre, genreNum, cate]);

  const sectionTitle = cate === "movie" ? "Movies" : "Tv Shows";
  let content = <Loading />;
  if (!isLoading && error) {
    content = <p>No Data Found</p>;
  }
  if (!isLoading && !error && items) {
    content = (
      <>
        <h2 className="text-white text-xl capitalize my-3">{sectionTitle}</h2>
        <MovieGrid isLoading={isLoading} items={items} category={cate} />
      </>
    );
  }
  return <section className="mb-4">{content}</section>;
};

export default MovieList;
