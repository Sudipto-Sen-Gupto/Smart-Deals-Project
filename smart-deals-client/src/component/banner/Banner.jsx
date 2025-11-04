import React from 'react';
import left from '../../assets/bg-hero-left.png';
import right from '../../assets/bg-hero-right.png'
import { Search } from 'lucide-react';
const Banner = () => {
    return (
        <div>
             <div className='p-20' style={{
        backgroundImage: `linear-gradient(to right, #FFE6FD, #E0F8F5), url(${left}), url(${right})`,
        backgroundPosition: 'left center, right center, center',
        backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
        backgroundSize: 'auto, auto, cover',
      }}>
                   
             <h1 className='text-[60px] text-center font-bold'>Deal your <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Products </span> 
                    <br /> in a <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'> Smart</span> way !</h1>
                    <p className='text-center my-4'>SmartDeals helps you sell, resell, and shop from trusted local sellers — all in one place!</p>

                   <div className='text-center flex justify-center items-center'>
                     <input type="search" placeholder='search here' className='border-2 border-blue-400 px-5 py-2' /><Search />
                   </div>
                   <div className='flex justify-center my-4'>
                    <button className='btn btn-primary px-4 py-2'>Watch all products</button>
                    <button className='btn btn-outline px-4 py-2 border-blue-400'>Post an products</button>
                   </div>
             </div>
        </div>
    );
};

export default Banner;