import React, { useState, useContext } from 'react'
import {db, auth} from '../../firebase/firebase';
import { LayoutContext } from '../../contexts/LayoutContext';
import { Input, Modal, Button } from '@material-ui/core';


function SignInModal() {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[email, setEmail] = useState("");

    const{openSignIn, classes, modalStyle,
            setOpenSignIn} = useContext(LayoutContext);

    const signIn = (e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .catch((error) =>{ alert(error.message)});

        setOpenSignIn(false);
    }

    return (
        

        <div>

            <Modal
                open={openSignIn}
                onClose={()=>setOpenSignIn(false)}
                >
                <div style={modalStyle} className={classes.paper}>
                <form className="app__signUp">
                    
                    
                        <img className="app__headerImage"
                        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"></img>
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

                    
                        <Button type="submit" onClick={signIn}>Sign In</Button>
                    </form>
                </div>
            </Modal>            
        </div>
    )
}

export default SignInModal

