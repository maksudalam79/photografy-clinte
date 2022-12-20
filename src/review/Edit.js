import React from "react";
import { useLoaderData } from "react-router-dom";

const Edit = () => {
  const user = useLoaderData();
  console.log(user);
  const handlerEdit = (event) => {
    event.preventDefault();
    const from = event.target;
    const massage = from.massage.value;

    const edit = {
      massage,
    };
    console.log(edit);
    fetch(`https://assigment-11-server-site.vercel.app/reviews/${user?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(edit),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Edit successfully");
          from.reset();
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="my-5">
      <form onSubmit={handlerEdit}>
        <div>
          <input
            name="massage"
            type="text"
            placeholder="Your massage"
            className="input input-bordered w-full "
            required
          />
        </div>

        <input className="btn" type="submit" value="Edit" />
      </form>
    </div>
  );
};

export default Edit;
