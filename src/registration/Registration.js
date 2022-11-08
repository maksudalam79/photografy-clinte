import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const Registration = () => {
    const { createUser,userupdateProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handlarSubmit = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const PhotoURL = from.PhotoURL.value;
    const email = from.email.value;
    const password = from.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        from.reset();
        handleprofile(name,PhotoURL)
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  const handleprofile=(name,photoURL)=>{
    const profile={
      displayName:name,
      photoURL:photoURL
    }
    userupdateProfile(profile)
    .then(()=>{})
    .catch(error=>console.error(error))
  }
    return (
        <form onSubmit={handlarSubmit} className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">PhotoURL</span>
        </label>
        <input
          type="text"
          name="PhotoURL"
          placeholder="text"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="text"
          name="email"
          placeholder="email"
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="text"
          name="password"
          placeholder="password"
          className="input input-bordered"
          required
        />
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">
            Forgot password?
          </a>
        </label>
        <div>
          <p>{error}</p>
        </div>
      </div>
      <div className="form-control mt-6">
        <button className="btn w-32 btn-primary mb-2">Registration</button>
      </div>
    </form>
    );
};

export default Registration;