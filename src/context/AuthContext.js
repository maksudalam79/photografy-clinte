import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';



export const AuthContext=createContext()
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    
    const providerLogin=(Provider)=>{
        setLoading(true)
       return signInWithPopup(auth,Provider)
    }
  const createUser=(email,password)=>{
    setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const userupdateProfile=(profile)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,profile)
    }
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        localStorage.removeItem('photoToken')
        return signOut(auth)
    }



    useEffect(()=>{
      const unsubcribe=onAuthStateChanged(auth,(currentUser)=>{
            console.log('user inside the state Change',currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubcribe()
        }
    },[])
    const authInfo={user,
        providerLogin,
        logOut,
        createUser,
        signIn,
    userupdateProfile,
        loading
        
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;