import React from 'react';

const Tableproduct = ({bids}) => {
    // const {name,email,product,bid}=bidProduct;

    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Product detail</th>
        <th>Bid</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
           {
                    bids.map((bidProduct,index)=>   <tr key={bidProduct.product} index={index} bidProduct={bidProduct}>
        <th>{index+1}</th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{bidProduct.name}</div>
              <div className="text-sm opacity-50">{bidProduct.email}</div>
            </div>
          </div>
        </td>
        <td>
         Product no: {bidProduct.product}
          <br />
          
        </td>
        <td>{bidProduct.bid}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>)
                  }
                      
      
    </tbody>
   
  </table>
</div>
        </div>
    );
};

export default Tableproduct;