import React, { useEffect, useState } from 'react'
import PostsList from './postsList';
import axios from 'axios';
import './createPosts.css'

const CreatePosts = () => {

  const [postTitle, setPostTitle] = useState('');
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    getPosts();
  },[])

  const getPosts = async() =>{
    await axios.get('http://localhost:4002/posts').then((res)=>{
      setPosts(res.data)
    })
  }

  const createPost =async()=>{
   await axios.post('http://localhost:4000/posts', {
      'title': postTitle
    }).then(()=>{
      getPosts()
    })
  }

  return (
    <>
    <div className='container d-flex flex-column align-items-center'>
      <div className='create-container d-flex flex-column justify-content-between'>
      <h3 className='font-weight-light'>Create a Post...</h3>
      <input className='form-control' placeholder='enter post title' value={postTitle} onChange={(e) => {
        setPostTitle(e.target.value)
      }} />
      <button className='btn btn-success' onClick={() => {
        createPost()
      }}>Submit post</button>
      </div>
    </div>
      <PostsList posts={posts}/>
    </>
  )
}

export default CreatePosts