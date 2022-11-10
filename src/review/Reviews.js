import React from 'react';

const Reviews = ({view}) => {
    const {reviewName,email,massage,photoUrl}=view
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{reviewName}</h2>
    <img className='w-10' src={photoUrl} alt="" />
    <p>{email}</p>
    <div className="card-actions justify-end">
    <h2 className="card-title">{massage}</h2>
    </div>
  </div>
</div>
    );
};

export default Reviews;