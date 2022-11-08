import React from 'react';

const Card = ({service}) => {
    const{img,title,price,description}=service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p><small>$ {price}</small></p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Show details</button>
          </div>
        </div>
      </div>
    );
};

export default Card;