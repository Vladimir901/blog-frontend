import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PostCard from './PostCard'

function Blog() {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])
  useEffect(() => {axios.get("http://127.0.0.1:8000/api/blog/").then(res => setPosts(res.data))},[])

  return (
    <div style={{margin: '1%'}}>
      <h1>Посты</h1>
      <div className="controlbar_blog" style={{display:'flex', justifyContent:'flex-start', margin: '5px 0'}}>
        <button onClick={()=>navigate('/blog/0')} style={{padding: "5px 10px", backgroundColor: '#2ec720', color: 'white', borderRadius: "5px", border: 'none', cursor: 'pointer'}}>Добавить пост</button>
      </div>
        <div className="posts_container" style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)'}}>
          {posts.map(post => {
            return <PostCard post={post} key={post.id}/>
          })}
        </div>
        
    </div>
  )
}

export default Blog