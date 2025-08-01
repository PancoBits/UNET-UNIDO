import React from 'react'

import { useState } from 'react'
import { Link } from 'react-router-dom'

import "./login.css"
export default function Login({setAuth,setUser}) {
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
        alert('hubo un error en los datos');
        throw new Error('Network response was not ok');
      }
    })
    .then((result) => {
       setAuth(true); // ✅ Marca como logueado
      setUser(result.user); // 🧑‍💻 Guarda info del usuario
       window.location.href = '/home'; // 🔄 Redirige
      console.log('Success:', result);
    })
    .catch((error) => {
       setAuth(false);
      console.error('Error:', error);
    });
};
  return (
     <div className='allApp'>
    <div className="container-login">
        <h1>Login Page</h1>
        <p>Please enter your credentials to log in.</p>
    <form>
        <label className='label-hidden'>email</label>
        <input className='input-login' onChange={(e)=>setUsername(e.target.value)} type="email" name="username" placeholder='email'/>
        <label className='label-hidden'>password</label>
        <input className='input-login' onChange={(e)=>setPassword(e.target.value)}  type="password" name="password" placeholder='contraseña'/>
        <button className="button-login" type="submit"onClick={Login}>Ingresar</button>
    </form>
        <p>Don't have an account? <Link to="/register">Register here</Link></p>
    </div>
  </div>
  )
}
