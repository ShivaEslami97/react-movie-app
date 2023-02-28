import React from "react";
// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay } from "swiper";
import MovieCard from "../MovieCard/MovieCard";

const MovieGrid = ({ isLoading, items, category }) => {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={5}
      loop={true}
      autoplay={{
        delay: 2500,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      grabCursor={true}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {!isLoading &&
        items.map((item, i) => {
          return (
            <SwiperSlide key={i} className="w-52">
              <MovieCard item={item} category={category} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default MovieGrid;
