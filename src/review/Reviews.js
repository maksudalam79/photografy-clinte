import React from 'react';

const Reviews = ({view}) => {
    const {reviewName,massage,photoUrl,name}=view
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src={photoUrl} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title">{reviewName}</h2>
          <p>{massage}</p>
         
        </div>
      </div>
    );
};

export default Reviews;