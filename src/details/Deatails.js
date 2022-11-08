import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Deatails = () => {
    const {facility}=useLoaderData()
    console.log(facility)
   
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center gap-3'>
           {
            facility.map(fac=><div>
            <img className='w-full h-60 m-5' src={fac.img} alt="" />
            </div>
            )
           }
        </div>
    );
};

export default Deatails;