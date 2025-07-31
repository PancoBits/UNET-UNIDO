import React from 'react'

export default function Home({user}) {
  return (
    <div> <h2>Bienvenido, {user?.name} 👋</h2></div>
  )
}
