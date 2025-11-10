import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../component/Authprovider/Authprovider';

const Myproducts = () => {
    const {user}=use(AuthContext);

    console.log(user?.accessToken);
    const[myProducts,setMyproducts]=useState([]);
    useEffect(()=>{
        if(user?.email){
            fetch(`http://localhost:3000/biduser?email=dip@gmail.com`,{
              headers:{
                authorization:`bearer ${user?.accessToken}`
            }
            }).then(res=>res.json()).then(data=>{console.log(data)
                console.log(data);
                setMyproducts(data)}
        )
        }
    },[user])
    return (
        <div>
            My product:{myProducts.length}
        </div>
    );
};

export default Myproducts;