import React, { useEffect, useState } from "react";
import Card from "./Card";

const Allservice = () => {
  const [allservice, setallService] = useState([]);
  useEffect(() => {
    fetch("https://assigment-11-server-site.vercel.app/allservice")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setallService(data);
      });
  }, []);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5 gap-4">
      {allservice.map((service) => (
        <Card key={service._id} service={service}></Card>
      ))}
    </div>
  );
};

export default Allservice;
