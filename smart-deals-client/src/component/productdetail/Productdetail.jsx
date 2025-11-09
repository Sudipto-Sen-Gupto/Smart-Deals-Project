import { ArrowBigLeft, CloudLightning } from 'lucide-react';
import React, { use, useEffect, useRef, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Authprovider/Authprovider';
import Swal from 'sweetalert2';
import Tableproduct from '../tableProduct/Tableproduct';

const Productdetail = () => {
    const data=useLoaderData();
      const modal=useRef();
      const [bids,setBids]=useState([])    
     const {user}=use(AuthContext);
    const handleClick=()=>{
       modal.current.showModal()
    }

 const {image,title,condition,usage,category,price_min,price_max,_id,created_at,email,seller_image,seller_contact,seller_name,description,status,location}=data;

  const handleSubmit=(e)=>{
    e.preventDefault();
    const email=e.target.email.value;
    const name=e.target.name.value;
    const bid=e.target.bid.value;
    const product=e.target.productId.value;  
    console.log(email,name,bid,product);
    const bidUser={email,name,bid,product};
    fetch(`http://localhost:3000/bidsuser`,{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(bidUser)
    }).then(res=>res.json()).then(data=>{console.log(data)
      if(data.insertedId){
        modal.current.close();
        Swal.fire({
  position: "top-end",
  icon: "success", 
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});

         bidUser._id=data.insertedId;
         const newBidUser=[...bids,bidUser];
         
         newBidUser.sort((a,b)=>a.bid-b.bid)
         setBids(newBidUser);
      }
    })
  }

   
    
    
    

     useEffect(()=>{
      fetch(`http://localhost:3000/biduser/${_id}`).then(res=>res.json()).then(dat=>{
        console.log(dat);
       
          setBids(dat)           
      })
     },[_id])

    return (
        <div >
            <div className='grid grid-cols-1 md:grid-cols-12 gap-10'>
                      <div className='col-span-5'>
                              <img src={image} alt="" />
                              <p>Product description</p>
                              <div className='flex justify-between'><p>Condition : {condition}</p>
                              <p>Usage-time: {usage}</p>
                              </div><hr />

                              <p>{description}</p>
                      </div>

                      <div className='col-span-7'>
                        
                        <div>
                            <p><ArrowBigLeft />Back to product</p>
                            <h1>{title}</h1>
                            <h3>{category}</h3>
                            <div>
                                <h1>${price_min}-{price_max}</h1>
                                <p>Price starts from</p>
                            </div>
                            <div>
                                <h1>Product details</h1>
                                <p>Product-id:{_id}</p>
                                <p>Posted:{created_at}</p>
                            </div>

                            <div>
                                <h1>Seller information</h1>
                                <div>
                                    <img src={seller_image} alt="" />
                                    <p>
                                        <span>{seller_name}</span>
                                        <span>{email}</span>
                                    </p>
                                </div>
                                <p>{location}</p>
                                <p>{seller_contact}</p>
                                <p>{status}</p>
                            </div>
                        </div>
                        <button className='w-full btn btn-primary' onClick={handleClick}>I want buy this product</button>
                       

<dialog id="my_modal_5" ref={modal} class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <fieldset class="fieldset">
          <form onSubmit={handleSubmit} className='space-y-5'>
            <label class="label">Email: </label>
          <input type="email" class="input" placeholder="" name='email' defaultValue={user?.email}/><br />
          <label class="label">Name: </label>
          <input type="text" class="input" placeholder="" name='name' defaultValue={user?.displayName}/><br />
          <label class="label">Bid: </label>
          <input type="text" class="input" placeholder="Bid" name='bid' /><br />
          <label class="label">Product: </label>
          <input type="text" class="input"  name='productId' defaultValue={_id} readOnly /><br />
         
          <button class="btn btn-neutral mt-4">Create A product</button>
          </form>
        </fieldset>

    <div class="modal-action">
      <form method="dialog">
       
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
                      </div>

            </div>


            <div  className='my-8'>
                  <h1>Bids for the products :<span>{bids.length}</span> </h1>
                 <div>

                  <Tableproduct bids={bids}></Tableproduct>
                 
                 </div>
            </div>
        </div>
    );
};

export default Productdetail;