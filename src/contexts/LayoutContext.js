import React, { createContext, useState } from 'react';
import { makeStyles } from '@material-ui/core';

export const LayoutContext = createContext();

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


const LayoutContextProvider = (props) => {
    const[openSignUp, setOpenSignUp] = useState(false);
    const[openSignIn, setOpenSignIn] = useState(false);

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    
    
    return (
        <LayoutContext.Provider value={{
            openSignIn, openSignUp, classes, modalStyle,
            setOpenSignIn, setOpenSignUp,
        }}>
            {props.children}
        </LayoutContext.Provider>
    )
}

export default LayoutContextProvider;

