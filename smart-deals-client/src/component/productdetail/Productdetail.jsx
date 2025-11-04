import { ArrowBigLeft, CloudLightning } from 'lucide-react';
import React, { useRef } from 'react';
import { useLoaderData } from 'react-router';

const Productdetail = () => {
    const data=useLoaderData();
      const modal=useRef()
    const handleClick=()=>{
       modal.current.showModal()
    }
    console.log(data);
    const {image,title,condition,usage,category,price_min,price_max,_id,created_at,email,seller_image,seller_contact,seller_name,description,status,location}=data;
    
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
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <form method="dialog">
       
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
                      </div>

            </div>


            <div>

            </div>
        </div>
    );
};

export default Productdetail;