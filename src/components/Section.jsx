import React from "react";

const Section = (props) => {
  const className = `pt-6 px-7 ${props.className}`;
  return <section className={className}>{props.children}</section>;
};

export default Section;
