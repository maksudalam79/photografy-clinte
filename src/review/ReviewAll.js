import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import DeatilesReview from "./DeatilesReview";

const ReviewAll = () => {
  const { loading } = useContext(AuthContext);
  const [allreviews, setReviews] = useState([loading]);
  console.log(allreviews)
  

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data)
       
      });
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center my-3">
      {allreviews?.map((review) => (
        <DeatilesReview key={review._id} review={review}></DeatilesReview>
      ))}
    </div>
  );
};

export default ReviewAll;
