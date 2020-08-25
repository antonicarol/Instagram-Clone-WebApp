import React, { createContext, useState, useEffect } from 'react';
import {db, auth} from '../firebase/firebase';
export const  AuthContext = createContext();

const AuthContextProvider =(props)=> {

    const[user, setUser] = useState(null);
    
    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged((authUser) =>{
          if(authUser){
            //User logged in
            console.log(authUser)
            setUser(authUser);
          
          }else{
            setUser(null);
          }
        })
    
        return () =>{
          unsubscribe();
        }
      }, [user]);
    return (
        <AuthContext.Provider value={{user, setUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
