import React, { useContext, useState } from 'react'
import '../css/Modal.css';
import {db, auth} from '../../firebase/firebase';
import { LayoutContext } from '../../contexts/LayoutContext';
import { Input, Modal, Button } from '@material-ui/core';

function SignUpModal() {
  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const[email, setEmail] = useState("");

    const{openSignUp, classes, modalStyle,
            setOpenSignUp} = useContext(LayoutContext);

    const signUp = (e) =>{
      e.preventDefault();
      auth.createUserWithEmailAndPassword(email, password)
      .then((authUser) =>{
        return authUser.user.updateProfile({
          displayName:username
        })
      })
      .catch((error) => alert(error.message));

      setOpenSignUp(false);
  }
    return (
      <Modal
      open={openSignUp}
      onClose={()=>setOpenSignUp(false)}
    >
    <div style={modalStyle} className={classes.paper}>
    <form className="app__signUp">
        
        
          <img className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"></img>
          
          <Input 
            placeholder="username"
            type="text"
            value={username}
            onChange={(e)=>{ setUsername(e.target.value)}} />
          
          <Input 
            placeholder="email"
            type="text"
            value={email}
            onChange={(e)=>{ setEmail(e.target.value)}} />
          
          <Input 
            placeholder="password"
            type="password"
            value={password}
            onChange={(e)=>{ setPassword(e.target.value)}} />

        
            <Button type="submit" onClick={signUp}>Sign Up</Button>
         
          
          
        
        </form>
    </div>
  </Modal>
    )
}

export default SignUpModal
