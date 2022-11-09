import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Review from "./Review";

const Myreview = () => {
  const { user, loading } = useContext(AuthContext);
  const [reviews, setReviews] = useState([loading]);
  console.log(reviews);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  
                </label>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Massage</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <Review review={review}></Review>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myreview;
