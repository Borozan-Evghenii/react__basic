import React, { useContext } from 'react'
import MyInput from '../UI/input/MyInput'
import Button from '../UI/button/Button'
import { AuthContext } from '../context/context'

export default function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const login = (e) => {
    e.preventDefault()
    setIsAuth(true)
    localStorage.setItem('isAuth', 'true')
  }
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={login} >
        <MyInput type="text" placeholder="Enter Login"/>
        <MyInput type="password" placeholder="Password" />
        <Button >Login</Button>
      </form>
    </div>
  )
}
