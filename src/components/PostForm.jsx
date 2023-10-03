
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function PostForm() {
  const navigate = useNavigate()
  const { postId } = useParams()
  const user = JSON.parse(localStorage.getItem("user"))
  const [postInfo, setPostInfo] = useState({
    theme: "",
    text: "",
  })
  const handleClick = (field, e) => {
    setPostInfo({
      ...postInfo,
      [field]: e.target.value,
    })
  }
  const savePost = () => {
    // console.log(user)
    if (postInfo.text != "" || postInfo.theme != "") {
      if(postId==0) postInfo.author = user.id
      else postInfo.author = postInfo.author.id
      if(!postInfo.datetimecreate) postInfo.datetimecreate = new Date()
      let formdata = new FormData()
      formdata.append("data", JSON.stringify(postInfo))
      axios.post(`http://127.0.0.1:8000/api/blog/${postId}/save/`, postInfo)
      .then((res) => {
        console.log(res.data)
        alert("Данные успешно сохранены")
        navigate(`/blog/${res.data.id}`)
      })
    }
  }
  useEffect(() => {
    if (postId != 0) axios.get(`http://127.0.0.1:8000/api/blog/?id=${postId}`).then(res => setPostInfo(res.data[0]))
  }, [])
  return (
    <div style={{ margin: "2%" }}>
      <h1>{postId != 0 ? 'Пост №' + postId : 'Новый пост'}</h1>
      <div className="post_container" style={{ margin: '1%' }}>
        <h3>Тематика</h3>
        <input type='text' value={postInfo?.theme} onChange={(e) => { handleClick('theme', e) }} style={{ padding: '5px', borderRadius: '5px', borderColor: 'lightgray' }} />
        <h3>Текст</h3>
        <textarea onChange={(e) => { handleClick('text', e) }} style={{ width: "100%", height: "30vh", borderRadius: '5px', borderColor: 'lightgray', padding: '5px'}} value={postInfo?.text}/>
        <br />
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '1%'}}>
          <button onClick={savePost} style={{ padding: '6px 12px' }}>{postId==0 ? "Создать" : "Сохранить"}</button>
        </div>
      </div>
    </div>
  )
}

export default PostForm