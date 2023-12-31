import React from 'react'
import { useNavigate } from 'react-router-dom'

function TitlePage() {
  const navigate = useNavigate()
  return (
    <div style={{width: '100%', height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <h1>Добро пожаловать!</h1>
        <button onClick={()=>navigate('/auth')} style={{padding:'4px 12px', margin: '1%'}}>Войти</button>
    </div>
  )
}

export default TitlePage