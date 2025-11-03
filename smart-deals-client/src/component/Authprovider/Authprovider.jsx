import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';
 export const AuthContext=createContext();
const Authprovider = ({children}) => {
     const googleProvider=new GoogleAuthProvider();
     const [user,setUser]=useState();
     const [loader,setLoader]=useState(true)
    const createUser=(email,pass)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,pass)
    }
         
    useEffect(()=>{
       const unsubscribe=  onAuthStateChanged(auth,(currentUser)=>{
                setUser(currentUser)
                setLoader(false)
         })
       return ()=>{
              
              unsubscribe();
             
       }
    },[]) 

    const signWithGoogle =()=>{ 
        setLoader(true)
        return signInWithPopup(auth,googleProvider)
    }

    const signInUser=(email,pass)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,pass);
    }
       
    const signout=()=>{
        return signOut(auth)
    }

    const userInfo={
         createUser,
         signInUser,
         user
         ,loader,
         signWithGoogle,signout
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default Authprovider;