import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiConfig from "../api/apiConfig";
import tmdbApi from "../api/movieApi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import useAxios from "../hooks/useAxios";
import CastList from "../components/CastList/CastList";
import SimilarMedia from "../components/SimilarMedia";
import Loading from "../components/Loading/Loading";

const Detail = () => {
  const { category, id } = useParams();
  const [items, setItems] = useState(null);
  const navigate = useNavigate();
  const { isLoading, fetchData } = useAxios();

  useEffect(() => {
    const handleData = (data) => {
      setItems(data);
    };
    fetchData(
      {
        axiosInstance: tmdbApi.detail,
        config: { url: `${category}/${id}`, param: {} },
      },
      handleData
    );
  }, [category, fetchData, id]);

  const image = apiConfig.originalImage(
    items?.poster_path || items?.backdrop_path
  );
  let content;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && !items) {
    content = <h3 className="pt-6 pl-6 text-white">Something went wrong!</h3>;
  }
  if (!isLoading && items) {
    content = (
      <>
        <div
          className="bg-cover"
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
        <div className="flex items-start gap-8 pt-6 pl-6 relative">
          <img
            src={image}
            className="w-80 rounded-2xl"
            alt={items.title || items.name}
          />
          <div className="space-y-5">
            <h3 className="text-white text-5xl w-4/5">
              {items.title || items.name}
            </h3>
            <div className="flex gap-2">
              {items.genres &&
                items.genres.slice(0, 5).map((genre, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 rounded-3xl text-white border border-white"
                  >
                    {genre.name}
                  </span>
                ))}
            </div>
            <p className="text-dark-gray text-xl w-4/5">{items.overview}</p>
            <div className="flex items-center justify-between gap-1 text-white w-4/5 text-lg">
              {category === "movie" ? (
                <p className="flex items-center justify-between gap-1">
                  <FaRegCalendarAlt />
                  Release Date:
                  <span className="ml-1">
                    {items.release_date.replaceAll("-", "/")}
                  </span>
                </p>
              ) : (
                <p className="flex items-center gap-1">
                  Number of Episodes:
                  <span>{items.number_of_episodes}</span>
                </p>
              )}

              <p className="text-white">
                Languages:
                {items.spoken_languages.slice(0, 3).map((item, i) => {
                  return (
                    <span className="ml-1" key={i}>
                      {(i ? ", " : "") + item.name}
                    </span>
                  );
                })}
              </p>
            </div>
            <div className="flex flex-col gap-4 pt-2 relative text-white">
              <h3>Cast</h3>
              <CastList category={category} id={items.id} />
            </div>
          </div>
        </div>
        <SimilarMedia category={category} id={id} />
      </>
    );
  }
  return (
    <section className="relative">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="text-white flex items-center relative gap-2 pt-6 pl-6 z-10"
      >
        <BiArrowBack /> Go Back
      </button>
      {content}
    </section>
  );
};

export default Detail;
