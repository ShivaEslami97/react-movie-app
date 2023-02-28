import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Navigate } from "react-router-dom";
import Section from "../components/Section";

const FavouriteList = () => {
  return (
    <Section className="text-white pl-6">
      <button
        type="button"
        onClick={() => Navigate(-1)}
        className="text-white flex items-center gap-2"
      >
        <BiArrowBack />
        Go Back
      </button>
      <p className="text-lg text-main">Comming soon!</p>
    </Section>
  );
};

export default FavouriteList;
