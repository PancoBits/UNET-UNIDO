import React from 'react'
import './Login.css' // Assuming you have a CSS file for styling
import { useState } from 'react'
export default function Login() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const Login = (e) => {
        // Handle login logic here
        e.preventDefault();
console.log({password:password, username:username});
        }
  return (
    <div>
        <h1>Login Page</h1>
        <p>Please enter your credentials to log in.</p>
    <form>
        <label>user</label>
        <input onChange={(e)=>setUsername(e.target.value)} type="text" name="user" />
        <label>password</label>
        <input onChange={(e)=>setPassword(e.target.value)}  type="password" name="password" />
        <button type="submit"onClick={Login}>Login</button>
    </form>
    </div>
  )
}
