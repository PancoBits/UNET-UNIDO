import React from 'react'
import NavBar from './NavBar'

export default function Home({user}) {
  return (
    <div> 
      <NavBar></NavBar>
      
      <h2>Bienvenido, {user?.name} 👋</h2>
    
    </div>

  )
}
