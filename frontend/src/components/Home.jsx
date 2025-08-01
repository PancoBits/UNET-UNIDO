import React from 'react'
import NavBar from './NavBar'
import Post from './post'

export default function Home({user}) {
  return (
    <div> 
      <NavBar></NavBar>
      
      <h2>Bienvenido, {user?.name} 👋</h2>
      <Post/>
    </div>

  )
}
