import React from 'react';
import { createBrowserRouter } from 'react-router';
import Rootlayout from '../../layout/rootLayout/Rootlayout';
import Home from '../../pages/home/Home';
import Allproducts from '../../pages/allproducts/Allproducts';
import Myproducts from '../../pages/myproducts/Myproducts';
import Mybids from '../../pages/mybids/Mybids';
import Createproducts from '../../pages/createproducts/Createproducts';
import Login from '../../pages/login/Login';
import Register from '../../pages/register/Register';
import Productdetail from '../productdetail/Productdetail';

export const router = createBrowserRouter([{
    path:'/',
    Component:Rootlayout,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:'/allproducts',
            Component:Allproducts
        },
        {
            path:'/myproducts',
            Component:Myproducts
        },
        {
            path:'/mybids',
            Component:Mybids
        },
        {
            path:'/createproducts',
            Component:Createproducts
        },
        {
            path:'/login',
            Component:Login
        },
        {
            path:'/register',
            Component:Register
        }
        ,
        {
            path:'/productdetails/:id',
            Component: Productdetail,
            loader:({params})=>fetch(`http://localhost:3000/products/${params.id}`)
        }
    ]
    
}])