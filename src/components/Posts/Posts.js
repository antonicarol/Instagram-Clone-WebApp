
import React, { useContext } from 'react'
import Post from './Post'
import { AuthContext } from '../../contexts/AuthContext'
import InstagramEmbed from 'react-instagram-embed';
import { PostsContext } from '../../contexts/PostsContext';
import '../css/Posts.css';

function Posts() {
    const{user} = useContext(AuthContext);

    const{posts} = useContext(PostsContext);

    return (
        <div className="posts">
        <div className="posts__Left">
          {posts.map(({id, post}) =>{
            return <Post  key={id}
                          user={user}
                          postId={id}
                          username={post.username}
                          caption ={post.caption}
                          imageUrl={post.imageUrl} />
        })}
        </div>
        <div className="posts__Right">
            <InstagramEmbed
          url='https://instagr.am/p/Zw9o4/'
          maxWidth={320}
          hideCaption={false}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
      />
        </div>
        
      </div>
    )
}

export default Posts
