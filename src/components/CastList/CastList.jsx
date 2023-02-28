import React, { useEffect, useState } from "react";
import tmdbApi from "../../api/movieApi";
import useAxios from "../../hooks/useAxios";
import apiConfig from "../../api/apiConfig";
import LoadingSpinner from "../Loading/LoadingSpinner";

const CastList = ({ category, id }) => {
  const [casts, setCasts] = useState([]);
  const { isLoading, fetchData } = useAxios();

  useEffect(() => {
    const handleData = (data) => {
      const filterCast = data.cast.filter((item) => {
        return item.profile_path;
      });
      console.log(filterCast);
      setCasts(filterCast.slice(0, 5));
    };
    fetchData(
      {
        axiosInstance: tmdbApi.credits,
        config: { url: `${category}/${id}`, param: {} },
      },
      handleData
    );
  }, [category, fetchData, id]);

  let content = <LoadingSpinner />;
  if (!isLoading && !casts.length) {
    content = <p>No casts found</p>;
  }
  if (!isLoading && casts) {
    content = casts.map((cast, i) => {
      return (
        <div key={i} className="space-y-1">
          <img
            src={`${apiConfig.w500Image(cast.profile_path)}`}
            alt={cast.name}
            className="min-w-[8rem] w-full rounded-md"
          />
          <p>{cast.name}</p>
          <p className="text-dark-gray text-sm">{cast.character}</p>
        </div>
      );
    });
  }

  return <div className="cast flex pr-8 gap-3">{content}</div>;
};

export default CastList;
