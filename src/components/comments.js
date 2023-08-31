import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './comments.css'

const Comments = (props) => {
  const [comments, setComments] = useState([]);
  const [commentsList, setCommentsList] = useState([]);
  let url = `http://localhost:4001/posts/${props.post.id}/comments`

  useEffect(() => {
    showCommentsList();
  }, [props.post.comments])


  const addComment = async () => {
    await axios.post(url, {
      "content": comments
    }).then(() => {
      setComments('')
    }).catch((err)=>{
      console.log('err', err)
    })
  }

  const showCommentsList = () => {
    return props.post.comments.map((comment) => {
      return <ul>
        <li>{comment.content}</li>
      </ul>
    })
  }

  return (
    <>
      <div className='comments-container'>
        <span>comments</span>
        <p>{showCommentsList()}</p>
 
        <div class="input-group mb-2">
          <input type="text" class="form-control" placeholder="add a comment" value={comments} onChange={(e) => {
            setComments(e.target.value)
          }} />
          <div class="input-group-append">
            <button class="btn btn-danger" onClick={() =>
              addComment()
            }>Send</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Comments