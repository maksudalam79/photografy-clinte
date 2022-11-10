import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Allreview from "../review/Allreview";
import ReviewAll from "../review/ReviewAll";


const Deatails = () => {
  const {_id, title, img, description } = useLoaderData();
  const {user}=useContext(AuthContext)
  console.log(user)

const handlerReview=(event)=>{
    event.preventDefault()
    const from=event.target
    const massage=from.massage.value
    const photoUrl=from.photoUrl.value
    const name=from.name.value
    
    

    const review={
        email:user?.email,
        reviewName:title,
        massage,
        photoUrl,
        name

       
        
    }
    fetch('http://localhost:5000/reviews',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(review)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.acknowledged){
            alert('Review successfully')
            from.reset()
        }
    })
    .catch(error=>console.error(error))


}


  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div>
        <ReviewAll></ReviewAll>
      </div>
      <div className="my-5">
        <form onSubmit={handlerReview}>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 m-3">
       <input name="name" type="text" placeholder="Name" defaultValue={user?.displayName} className="input input-bordered w-full  "readOnly />
        <input name="photoUrl" type="text" placeholder="photoUrl"defaultValue={user?.photoURL}  className="input input-bordered w-full "readOnly />
        <input name="email" type="text" placeholder="Email" defaultValue={user?.email} className="input input-bordered w-full "readOnly />
        <input name="massage" type="text" placeholder="Your massage" className="input input-bordered w-full "required />
        
       </div>
       {
        user?.email?
        <input className="btn" type="submit" value="Review" />
        :
        <Link to='/login'>
            <button className="btn btn-accent">Login</button>
        </Link>
       }
        </form>
       
      </div>
      
    </div>
  );
};

export default Deatails;
