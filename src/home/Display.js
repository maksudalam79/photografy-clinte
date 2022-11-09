import React from 'react';

const Display = ({fac}) => {
    return (
        <div>
            <img className='w-56 h-40 gap-3' src={fac.img} alt="" />
        </div>
    );
};

export default Display;