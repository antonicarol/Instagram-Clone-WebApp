import React, { useContext } from 'react'
import { LayoutContext } from '../contexts/LayoutContext'
import { Button, Avatar } from '@material-ui/core';
import {db, auth} from '../firebase/firebase';
import { AuthContext } from '../contexts/AuthContext';
import './css/Header.css'

function Header() {
    const{setOpenSignIn, setOpenSignUp} = useContext(LayoutContext);
    const{user} = useContext(AuthContext);
    return (
        <div>
            <div className="header">
                <img className="header__logo"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"></img>
                {user ? (
                    <div className="header__loginContainer">
                    <Avatar onClick={()=>console.log("clicked the avatar")}
                    className="header__avatar"
                    alt={user.displayName}
                    src="/static/images/avatar/1.png" />
                    <button className="header__button" type="submit" onClick={()=> auth.signOut()}>Log Out</button>
                    </div>
                    ) :(
                    <div className="header__loginContainer">
                        <button className="header__button" onClick={()=> setOpenSignUp(true)}> Sign Up</button>
                        <button className="header__button" onClick={()=> setOpenSignIn(true)}>Sign In</button>
                    </div>
                    
                    )}
            </div>
        </div>
    )
}

export default Header
