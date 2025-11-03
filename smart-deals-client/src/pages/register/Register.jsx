import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../component/Authprovider/Authprovider';
import { Eye, EyeOff } from 'lucide-react';

const Register = () => {
    const {createUser}=use(AuthContext);
     const [show,setShow]=useState(false)
      const handleSubmit=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const pass=e.target.pass.value;
        createUser(email,pass).then(res=>{
            console.log(res);
            e.target.reset();
        }).then(err=>alert(err.message));
      }
     
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
             
           <form onSubmit={handleSubmit}>
            <label className="label">Name</label>
          <input type="text" className="input" placeholder="Write your name" name='name' />
           <label className="label">Photo_URL</label>
          <input type="text" className="input" placeholder="photo_url" name='photo' />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name='email' />
          <label className="label">Password</label>
         <div className='relative'>
             <input type={show?'text':'password'} className="input" placeholder="Password"  name='pass'/>
             <p className='absolute top-2 right-6' onClick={()=>setShow(!show)}>{show?<Eye />:<EyeOff />}</p>
         </div>
         
          <button className="btn btn-neutral mt-4 w-full">Sign Up</button>
           </form>
             <p>Already have an account ? <Link to={'/login'}> <span className='text-blue-400 underline'>Log in</span> </Link></p>
        </fieldset>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;