import React from 'react';

const Register = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register Now!</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
             <label className="label">Name</label>
          <input type="text" className="input" placeholder="Email" />
           <label className="label">Photo_URL</label>
          <input type="text" className="input" placeholder="Email" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
         
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;