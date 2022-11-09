import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Reviews from './Reviews';

const Allreview = () => {
    const review=useLoaderData()
    console.log(review)
   
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-5'>
            {
               review.map(view=><Reviews
               key={view}
               view={view}
               ></Reviews>) 
            }
        </div>
    );
};

export default Allreview;