import React, { useEffect, useState } from "react";
import tmdbApi from "../api/movieApi";
import useAxios from "../hooks/useAxios";
import MovieGrid from "./MovieGrid/MovieGrid";

const SimilarMedia = ({ category, id }) => {
  const [items, setItems] = useState([]);
  const { isLoading, fetchData } = useAxios(true);
  const sectionTitle = `Similar ${
    category === "movie" ? "Movies" : "Tv Shows"
  }`;

  useEffect(() => {
    const handleData = (data) => {
      const filterData = data.results.filter((item) => {
        return item.backdrop_path || item.poster_path;
      });
      setItems([...filterData]);
    };
    fetchData(
      {
        axiosInstance: tmdbApi.similar,
        config: { url: `${category}/${id}`, param: { language: "en-US" } },
      },
      handleData
    );
  }, [category, fetchData, id]);

  return (
    <section className="pt-6 pl-6 relative">
      <h2 className="text-white text-2xl capitalize my-3">{sectionTitle}</h2>
      <MovieGrid isLoading={isLoading} items={items} category={category} />
    </section>
  );
};

export default SimilarMedia;
