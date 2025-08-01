import React, { useState } from 'react';

export default function Register({ setAuth, setUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert('Por favor completa todos los campos');
      return;
    }
    console.log(email);
   if(!email.endsWith("@unet.edu.ve")){
       alert("correo no permitido, debe ser @unet.edu.ve")  
    return ;
   }
    const data = { name, email, password };

    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error('No se pudo registrar el usuario');
      })
      .then((result) => {
        setAuth(true);
        setUser({ name, email });
        window.location.href = '/home';
        console.log('Registered:', result);
      })
      .catch((error) => {
        setAuth(false);
        console.error('Error:', error);
        alert('Error al registrar usuario');
      });
  };

  return (
    <div>
      <h1>Register Page</h1>
      <p>Please enter your details to create an account.</p>
      <form onSubmit={handleRegister}>
        <label>Name</label>
        <input onChange={(e) => setName(e.target.value)} type="text" value={name} />
        <label>Email</label>
        <input onChange={(e) => setEmail(e.target.value)} type="email" value={email} />
        <label>Password</label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" value={password} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
