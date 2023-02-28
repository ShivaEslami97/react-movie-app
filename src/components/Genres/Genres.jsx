import React, { useState } from "react";
import { movieGenres } from "../../data/movieGenresData";

const Genres = ({ setActiveId }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const genreHandler = (objId, indx) => {
    setActiveId(objId);
    setActiveIndex(indx);
  };

  return (
    <section className="flex flex-wrap justify-between py-5">
      {movieGenres.map((genre, index) => {
        return (
          <button
            key={index}
            onClick={() =>
              genreHandler(
                index === 0
                  ? { genre: "all" }
                  : { movieId: genre.movieId, tvId: genre.tvId },
                index
              )
            }
            className={`px-8 py-2  text-white shadow-md rounded-2xl ${
              activeIndex === index ? "genres-active" : "bg-main-dark"
            }`}
            type="button"
          >
            <span> {genre.genre}</span>
          </button>
        );
      })}
    </section>
  );
};

export default Genres;
