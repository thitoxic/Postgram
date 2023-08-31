import React, { useEffect, useState } from 'react'
import Comments from './comments';
import './postsList.css'

const PostsList = (props) => {
const { posts } = props;

 const showPosts =()=>{
  if(posts.length == 0){
    return <p style={{textAlign: 'center', width: '100%'}}>No posts found</p>
  } else {
    return posts.map((post)=>{
        return <div className='post-container'>
        <h5 className='font-italic'>{post.title}</h5>
        <Comments post={post}/>
        </div>
      })
  }
  }

  return (
    <div className='post-list'>
      {showPosts()}
    </div>
  )
}

export default PostsList