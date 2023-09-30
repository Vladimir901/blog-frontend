import React from 'react'
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"

function Header() {
localStorage.setItem("user", JSON.stringify({name: "User"}))
const user = JSON.parse(localStorage.getItem('user'))
  return (
    <>
    <div className='header' style={{ width: '100%', backgroundColor: '#417cf2' }}>
        <div style={{ display:'flex', justifyContent: 'space-around', color: "white", padding: '1%', }}>
            <Link to={'/'}><h2>Главная</h2></Link>
            <Link to={'/auth'}><h2>{user ? user.name : "Войти"}</h2></Link>
            {user && <Link to={'/blog'}><h2>Блог</h2></Link>}
            {user && <Link to={'/neural'}><h2>Нейросеть</h2></Link>}
            <Link to={'/about'}><h2>О нас</h2></Link>
        </div>
    </div>
    <Outlet />
  </>
  )
}

export default Header