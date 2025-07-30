import React from 'react'
import './Login.css' // Assuming you have a CSS file for styling
import { useState } from 'react'
export default function Login() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
 const Login = (e) => {
  e.preventDefault();

  const data = {
    username: username,
    password: password,
  };

  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then((result) => {
      console.log('Success:', result);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};
  return (
    <div>
        <h1>Login Page</h1>
        <p>Please enter your credentials to log in.</p>
    <form>
        <label>user</label>
        <input onChange={(e)=>setUsername(e.target.value)} type="text" name="username" />
        <label>password</label>
        <input onChange={(e)=>setPassword(e.target.value)}  type="password" name="password" />
        <button type="submit"onClick={Login}>Login</button>
    </form>
    </div>
  )
}
