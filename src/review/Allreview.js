import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Allreview = () => {
    const {reviewName}=useLoaderData()
    console.log(reviewName)
    return (
        <div>
            
        </div>
    );
};

export default Allreview;