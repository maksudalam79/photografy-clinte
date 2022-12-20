import React from "react";
import Display from "./Display";

const Gallery = ({ s }) => {
  const { facility } = s;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2"data-aos="fade-down" >
      {facility.map((fac) => (
        <Display fac={fac}></Display>
      ))}
    </div>
  );
};

export default Gallery;
