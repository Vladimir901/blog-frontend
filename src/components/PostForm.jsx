import React from 'react'
import { useParams } from 'react-router-dom'

function PostForm() {
  const { postId }= useParams()
  return (
    <div>PostForm №{postId}</div>
  )
}

export default PostForm