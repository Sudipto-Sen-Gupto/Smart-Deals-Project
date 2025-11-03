import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import './nav.css'
import { AuthContext } from '../Authprovider/Authprovider';
const Navbar = () => {
    const {user,signout}=use(AuthContext);
    const handleSignOut=()=>{
        signout().then(res=>{
            
        }).then(err=>alert(err.message))
    }
    const list=<nav className='space-x-10 text-[20px]'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/allproducts'}>All Products</NavLink>
        <NavLink to={'/myproducts'}>My products</NavLink>
        <NavLink to={'/mybids'}>My Bids</NavLink>
        <NavLink to={'/createproducts'}>Create Products</NavLink>
        
    </nav>
    return (
        <div>
            <div class="navbar bg-base-100 shadow-sm p-5">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabindex="-1"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {
            list
        }
      </ul>
    </div>
    <a class="btn btn-ghost text-xl">Smart-Deals</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1 ">
     {
        list
     }
    </ul>
  </div>
  <div class="navbar-end">

    {
        user? <button className='btn ' onClick={handleSignOut}>Log Out</button>: <Link to={'/login'}><button className='btn '>Log In</button></Link>
    }
  
   <Link to={'/register'}><button className='btn'>Sign Up</button></Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;