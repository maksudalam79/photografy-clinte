import React  from "react";

const Review = ({ review }) => {
  const {_id, email, reviewName, massage } = review;

  const handlerDelete=_id=>{
    const proceed=window.confirm("Are you sure you delete this review")
    if(proceed){
        fetch(`http://localhost:5000/reviews/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })

    }

  }
  
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
      <td>{email}</td>
      <td>{massage}</td>
      <th>
        <button className="btn btn-ghost btn-xs"></button>
      </th>
    </tr>
  );
};

export default Review;
