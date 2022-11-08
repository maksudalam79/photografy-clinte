import React from "react";
import img1 from "../other/Feb21_19_1218814245.jpg";
import img2 from "../other/CanvaPhotographingfood.webp";
import img3 from "../other/smartworks-coworking-cW4lLTavU80-unsplash.jpg";
import img4 from "../other/jen-theodore-bfFvK1b6-hA-unsplash.jpg";
import img5 from "../other/jean-carlo-emer-RjyrDAQYZAE-unsplash.jpg";
import img6 from "../other/tamara-bellis-IwVRO3TLjLc-unsplash.jpg";

import "./Banner.css";
import BannerItem from "../banner/BannerItem";
import { Link, useLoaderData } from "react-router-dom";
import Services from "../services/Services";

const bannarData=[
    {
     image:img1,
     title:"Advertising photography",
     id:1,
     prev:5,
     next:2
    },
    {
     image:img2,
     title:"Food photography",
     id:2,
     prev:1,
     next:3
    },
    {
     image:img3,
     title:"Corporate photography",
     id:3,
     prev:2,
     next:4
    },
    {
     image:img4,
     title:"Weeding photography",
     id:4,
     prev:3,
     next:5
    },
    {
        image:img5,
        title:"Sports photography",
        id:5,
        prev:4,
        next:6
       },
       {
        image:img6,
        title:"Fashion photography",
        id:6,
        prev:5,
        next:1
       }
    
 
    
    
 
 ]
 

const Home = () => {
    
    
  return (
    <div>
        <div className="carousel w-full rounded-lg">
      {
        bannarData.map(bannar=><BannerItem
        key={bannar.id}
        bannar={bannar}
        ></BannerItem>)
      }
     
    </div>
    <div>
        <Services></Services>
        <Link to='/allservice'><button className="btn btn-ghost mb-2">See All</button></Link>
    </div>
    </div>

  );
};

export default Home;
