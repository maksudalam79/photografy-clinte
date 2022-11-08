import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Deatails = () => {
    
  const {title,img,description}=useLoaderData()
   
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          
        </div>
      </div>
      <div className='my-5'>
      <textarea className="textarea textarea-primary" placeholder="Bio">

      </textarea>
      <button className="btn btn-ghost">Button</button>
      </div>
        </div>
    );
};

export default Deatails;