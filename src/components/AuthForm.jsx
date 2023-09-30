import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AuthForm() {
    const navigate = useNavigate()
    // const user = localStorage.getItem("user") // Проверка на наличие юзера в лок.хранилище
    const [isNewUser, setIsNewUser] = useState(false)
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const handleAuth = () => {
        navigate("/blog")
    }

    const handleRegister = () => {
        navigate("/blog")
    }
    const changeTypeOfAuth = () => {
        setLogin("")
        setPassword("")
        setIsNewUser(!isNewUser)
    }
    return (
        <div className="authform center" style={{height: '90vh', paddingTop: '5px'}}>
            <div>
                {isNewUser ? <h1>Регистрация</h1> : <h1>Вход</h1>}
                <label htmlFor="login_reg">Логин</label>{" "}
                <input id="login_reg" type='text' value={login} onChange={(value) => setLogin(value)} />
                <br />
                <label htmlFor="password_reg">Пароль</label>{" "}
                <input id="password_reg" type='text' value={password} onChange={(value) => setPassword(value)} />
                <br />
                {isNewUser ?
                    <div>
                        <button onClick={handleRegister}>Зарегистрироваться</button>
                        <br />
                        <a href='#' onClick={changeTypeOfAuth}>Уже зарегистрированы?</a>
                    </div>
                    :
                    <div>
                        <button onClick={handleAuth}>Войти</button>
                        <br />
                        <a href='#' onClick={changeTypeOfAuth}>Ещё не зарегистрированы?</a>
                    </div>
                }
            </div>
        </div>
    )
}

export default AuthForm