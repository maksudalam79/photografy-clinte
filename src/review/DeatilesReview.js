import React from 'react';

const DeatilesReview = ({review}) => {
    console.log(review)
    const {name,massage,reviewName,
        photoUrl
    }=review
    return (
        <div className="card card-compact w-48 bg-base-100 shadow-xl">
        <figure className='w-48 h-48'>
            <img src={photoUrl} alt="Shoes" />
            </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title">{reviewName}</h2>
          <p>{massage}</p>
         
        </div>
      </div>
    );
};

export default DeatilesReview;