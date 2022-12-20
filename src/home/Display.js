import React from 'react';

const Display = ({fac}) => {
    return (
        <div className='mt-5'>
            <img className='w-full' src={fac.img} alt="" />
        </div>
    );
};

export default Display;