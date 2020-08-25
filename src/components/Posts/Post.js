import React, { useState, useEffect } from 'react'
import '../css/Post.css';
import Avatar from '@material-ui/core/Avatar';
import { db } from '../../firebase/firebase';
import firebase from 'firebase';

function Post({user,postId, username, caption, imageUrl}) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    useEffect(()=>{
        let unsubscribe;
        if(postId){
            unsubscribe = db
            .collection("posts")
            .doc(postId)
            .collection("comments")
            .orderBy('timestamp', 'desc')
            .onSnapshot((snap) =>{
                setComments(snap.docs.map((doc) => doc.data()))
            });
        }

        return () =>{
            unsubscribe();
        };

    }, [postId])

    const handlePost = (e) =>{
        e.preventDefault();

        db.collection("posts")
        .doc(postId).collection("comments")
        .add({
            text: comment,
            username: user.displayName,
            timestamp : firebase.firestore.FieldValue.serverTimestamp()
        });
        setComment('');

    }
    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                className="post__avatar"
                alt={username}
                src="/static/images/avatar/1.png" />
                <h3>{username}</h3>
            </div>

            {/* image */}
            <img className="post__image"
             src={imageUrl} />

            <h4 className="post__text"><strong> {username}   </strong>{caption}</h4>
            
            <div className="post__comments">
                {comments.map((comment)=>{
            return (<p>
                <strong>{comment.username}</strong> {comment.text}
            </p>)
        })}
            </div>
            
            {user && <form className="post__commentBox">
                <input  className="post__input"
                        type="text" 
                        value={comment}
                        placeholder="Write a comment.."
                        onChange={(e)=> setComment(e.target.value)}></input>
                <button className="post_submit"
                        type="submit"
                        onClick={handlePost}>Post</button>
            </form>}
            
            
        </div>
    )
}

export default Post
