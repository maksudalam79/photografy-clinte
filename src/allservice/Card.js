import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Card = ({service}) => {
    const{_id,img,title,description}=service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
        <PhotoProvider>
      <PhotoView src={img}>
        <img src={img} alt="" />
      </PhotoView>
    </PhotoProvider>
          </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description.slice(0,100)+'...'}</p>
       
      
      
         
          <div className="card-actions justify-end">
            <Link to={`/allservice/${_id}`}>
            <button  className="btn btn-primary">Show details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Card;