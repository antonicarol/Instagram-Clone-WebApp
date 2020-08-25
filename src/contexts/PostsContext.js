import React, { createContext, useEffect, useState } from 'react';
import {db, auth} from '../firebase/firebase';

export const PostsContext = createContext();


const PostsContextProvider = (props) => {
    const[posts, setPosts] = useState([]);

    useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snap =>{
        //  onSnapshot --> Listener that every time the db changes
        //  is going to take a snap of what the collection looks like!
        setPosts(snap.docs.map(doc =>({
          post: doc.data(),
          id: doc.id})
        ));
    })
    }, [])
    return ( 
        <PostsContext.Provider value={{posts, setPosts}}>
            {props.children}
        </PostsContext.Provider>
     );
}
 
export default PostsContextProvider;