import React from "react";
import { Link } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import { category } from "../../api/movieApi";
import noImage from "../../images/no-image.jpg";

const MovieCard = (props) => {
  const { item } = props;
  const link = "/categories/" + category[props.category] + "/" + item?.id;
  let bg = noImage;
  if (item?.poster_path || item?.backdrop_path) {
    bg = apiConfig.originalImage(item.poster_path || item.backdrop_path);
  }

  return (
    <Link to={link} state={item}>
      <div className="movie-card">
        <img src={bg} alt="" className="w-52 rounded-lg" />
        <div>
          <h3 className="text-white text-base mt-2">
            {item?.title || item?.original_title || item?.name}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
