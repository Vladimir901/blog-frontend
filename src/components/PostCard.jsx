import React from 'react'
import postimg from '../assets/defpostcard.jpg'
import { useNavigate } from 'react-router-dom'

function PostCard({post}) {
  const navigate = useNavigate()
  return (
    <span style={{border:'1px solid blue', borderRadius: '5px'}}>
      {/* <img src={postimg} style={{width: '100%', height: '20%'}}/> */}
      <div className="shortinfo" style={{backgroundImage: `url(${postimg})`, width: '100%', color: 'white', height:'5vh'}}>
        <h2>{post.title}</h2>
      </div>
        <h4>{post.author.fio}</h4>
        <h4>{post.datetimecreate}</h4>
        <button onClick={()=>navigate(`/blog/${post.id}`)}>Подробнее</button>
    </span>
  )
}

export default PostCard