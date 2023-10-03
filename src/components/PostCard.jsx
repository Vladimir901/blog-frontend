import React from 'react'
import postimg from '../assets/defpostcard.jpg'
import { useNavigate } from 'react-router-dom'

function PostCard({post}) {
  const navigate = useNavigate()
  return (
    <span style={{border:'1px solid blue', borderRadius: '5px', margin: '1%', maxWidth: '100%'}}>
      {/* <img src={postimg} style={{width: '100%', height: '20%'}}/> */}
      <div className="shortinfo" style={{backgroundImage: `url(${postimg})`, width: '100%', color: 'white', height:'5vh'}}>
        <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', height: '100%'}}>
          <h4>{post.theme}</h4>
        </div>
      </div>
        <p>{post.text.length>100 ? post.text.substr(0, 200)+"..." : post.text}</p>
        <br/>
        <p>Автор: {post.author.fio}</p>
        <p>{new Date(post.datetimecreate).toLocaleDateString()}</p>
        <div style={{display: "flex", justifyContent: "center"}}>
          <button onClick={()=>navigate(`/blog/${post.id}`)}>Подробнее</button>
        </div>
    </span>
  )
}

export default PostCard