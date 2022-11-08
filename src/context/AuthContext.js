import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';



export const AuthContext=createContext()
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    
    const providerLogin=(Provider)=>{
       return signInWithPopup(auth,Provider)
    }
   const providerGithub=(Provider)=>{
    return signInWithPopup(auth,Provider)
   }
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const userupdateProfile=(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        return signOut(auth)
    }



    useEffect(()=>{
      const unsubcribe=onAuthStateChanged(auth,(currentUser)=>{
            console.log('user inside the state Change',currentUser)
            setUser(currentUser)
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
        providerGithub,
        userupdateProfile
        
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