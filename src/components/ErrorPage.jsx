import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='center' style={{height: '100vh', flexDirection: 'column', gap: '2%'}}>
      <h1>Упс.. Страница не найдена.</h1>
      <Link to={'/'}>Вернуться на главную</Link>
    </div>
  )
}

export default ErrorPage