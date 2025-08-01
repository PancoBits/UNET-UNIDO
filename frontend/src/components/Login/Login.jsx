import React from 'react'

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Login({setAuth,setUser}) {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
      const navigate = useNavigate();
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
      navigate("/home") // 🔄 Redirige
      console.log('Success:', result);
    })
    .catch((error) => {
       setAuth(false);
      console.error('Error:', error);
    });
};
  return (
    <div>
    
        <h1>Pagina de login</h1>
        <p>Por favor ingrese su informacin</p>
    <form>
        <label>email</label>
        <input onChange={(e)=>setUsername(e.target.value)} type="email" name="username" />
        <label>Contraseña</label>
        <input onChange={(e)=>setPassword(e.target.value)}  type="password" name="password" />
        <button type="submit"onClick={Login}>Login</button>
    </form>
        <p>No tienes una cuenta? <Link to="/register">Registrarse aca</Link></p>
    </div>
  )
}
