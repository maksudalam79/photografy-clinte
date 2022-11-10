import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import Reviews from './Reviews';

const Allreview = () => {
    const review=useLoaderData()
    console.log(review)
    
    
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center my-3'>
            {
                review.length>0?
               review.map(view=><Reviews
               key={view}
               view={view}
               ></Reviews>) 
               :
               <h2 className='text-5xl text-amber-900'>No Review</h2>
            }
        </div>
    );
};

export default Allreview;