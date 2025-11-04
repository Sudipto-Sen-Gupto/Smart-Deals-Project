import React from 'react';
import { Link } from 'react-router';

const Productui = ({product}) => {
    
    return (
        <div class="card bg-base-100 w-96 shadow-sm">
  <figure class="px-10 pt-10">
    <img
      src={product.image}
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{product.title}-{product.usage}</h2>
    <p>${product.price_min}-{product.price_max}</p>
    <div class="card-actions">
    <Link to={`/productdetails/${product._id}`}>  <button class="btn btn-primary w-full">View Detail</button></Link>
    </div>
  </div>
</div>
    );
};

export default Productui;