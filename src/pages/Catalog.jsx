import React from "react";
import MediaList from "../components/MediaList/MediaList";

const Catalog = ({ query }) => {
  return (
    <>
      <MediaList genre={query} type="list" cate="movie" />
      <MediaList genre={query} type="list" cate="tv" />
    </>
  );
};

export default Catalog;
