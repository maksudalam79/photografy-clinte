import React from 'react';
import Display from './Display';

const Gallery = ({s}) => {
    const {facility}=s
   
    return (
<div className='grid grid-cols-1 lg:grid-cols-2 gap-3 m-3 justify-items-center'>
           
           {
              facility.map(fac=><Display
                  fac={fac}
              ></Display>
              
              )
           }
       
       </div>
    );
};

export default Gallery;