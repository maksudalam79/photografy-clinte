import React  from "react";
import { Link } from "react-router-dom";

const Review = ({ review,handlerDelete }) => {
  const {_id, email, reviewName, massage,photoUrl } = review;

 
  
  return (
    <tr>
      <th>
        <label>
        <button onClick={()=>handlerDelete(_id)} className="btn btn-ghost">Delete</button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar"></div>
          <div>
            <div className="font-bold">{reviewName}</div>
          </div>
        </div>
      </td>
      <td>
        <img className="w-10" src={photoUrl} alt="" />
        <p>{email}</p>
      </td>
      <td>{massage}</td>
      <th>
        <Link to={`/edit/${_id}`}><button className="btn btn-ghost btn-xs">Edit</button></Link>
      </th>
    </tr>
  );
};

export default Review;
