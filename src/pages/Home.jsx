import React, { useState } from "react";
import Genres from "../components/Genres/Genres";
import Header from "../components/Header/Header";
import Catalog from "./Catalog";

const Home = () => {
  const [query, setQuery] = useState({ genre: "all" });
  return (
    <div className="pt-6 px-7">
      <Header />
      <Genres activeId={query} setActiveId={setQuery} />
      <Catalog query={query} />
    </div>
  );
};

export default Home;
