import React, { useState, useEffect } from 'react';

import './App.css';
import ImageUpload from './components/ImageUpload';

import { LayoutContext } from './contexts/LayoutContext';
import { useContext } from 'react';
import SignUpModal from './components/Auth/SignUpModal';
import SignInModal from './components/Auth/SignInModal';
import Header from './components/Header';
import { AuthContext } from './contexts/AuthContext';
import { PostsContext } from './contexts/PostsContext';
import Posts from './components/Posts/Posts';

function App() {

  const{openSignIn, openSignUp, 
            setOpenSignIn, setOpenSignUp} = useContext(LayoutContext);
  
  const{user} = useContext(AuthContext);
  
  return ( <>
  
    <div className="app">
    
     <SignUpModal
        open={openSignUp}
        onClose={()=>setOpenSignUp(false)} />
      <SignInModal
        openn={openSignIn}
        onClose={()=>setOpenSignIn(false)} />

      <Header />
      
      <Posts></Posts>
  
      {user ? 
      ( <ImageUpload username={user.displayName}></ImageUpload>) 
      : (<h3>Log in to Upload posts!</h3>) }
    
    
    </div>
    
    
  </>
  );
}

export default App;
