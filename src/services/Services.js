import React, { useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services,setServices]=useState([])
    useState(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5'>
            {
               services.map(service=><Service
               key={service._id}
               service={service}
               ></Service>) 
            }
        </div>
    );
};

export default Services;