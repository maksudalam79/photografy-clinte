import React from "react";

const Service = ({ service }) => {
  console.log(service);
  const { title, img, description } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p> {description.slice(0, 100) + "..."}</p>
      </div>
    </div>
  );
};

export default Service;
