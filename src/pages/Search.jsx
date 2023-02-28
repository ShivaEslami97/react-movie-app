import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Section from "../components/Section";

const Search = () => {
  const navigate = useNavigate();
  return (
    <Section className="text-white pl-6">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="text-white flex items-center gap-2"
      >
        <BiArrowBack />
        Go Back
      </button>
      <p className="text-lg text-main">Comming soon!</p>
    </Section>
  );
};

export default Search;
