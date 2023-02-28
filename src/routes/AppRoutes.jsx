import React from "react";
import { Route, Routes } from "react-router-dom";
import Catalog from "../pages/Catalog";
import Detail from "../pages/Detail";
import Error from "../pages/Error";
import FavouriteList from "../pages/FavouriteList";
import Home from "../pages/Home";
import MyList from "../pages/MyList";
import Search from "../pages/Search";
import SharedLayout from "../pages/SharedLayout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/myList" element={<MyList />} />
        <Route path="/favouriteList" element={<FavouriteList />} />
        <Route path="categories/:category" element={<Catalog />} />
        <Route path="categories/:category/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
