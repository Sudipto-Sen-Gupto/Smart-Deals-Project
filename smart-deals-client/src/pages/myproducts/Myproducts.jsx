import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../component/Authprovider/Authprovider';

const Myproducts = () => {
    const {user}=use(AuthContext);
    const[myProducts,setMyproducts]=useState([]);
    useEffect(()=>{
        if(user?.email){
            fetch(`http://localhost:3000/biduser?email=${user.email}`).then(res=>res.json()).then(data=>{console.log(data)
                setMyproducts(data)}
        )
        }
    },[])
    return (
        <div>
            My product:{myProducts.length+1}
        </div>
    );
};

export default Myproducts;