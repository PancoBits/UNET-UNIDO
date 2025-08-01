import React, { useEffect, useState } from 'react'

export default function NavBar() {
    const [busqueda, setBusqueda] = useState('');
    const [usuario, setuSuario] = useState([])
console.log(busqueda)
   
    useEffect(() => {
      fetch('http://localhost:3000/buscar')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        alert('hubo un error en los datos');
        throw new Error('Network response was not ok');
      }
    })
    .then((result) => {
        console.log(result)
     setuSuario(result);
    })
    .catch((error) => {
      
      console.error('Error:', error);
    });
    }, [])
    
  return (
    <div>
        <input onChange={(e)=>setBusqueda(e.target.value)}>

        </input>


{
    usuario.filter((user)=>user.NAME.includes(busqueda)).map(
        usuarioFiltrado=>{
      return(    <div key={usuarioFiltrado.CLIENT_ID}>           
            
 <div >{usuarioFiltrado.NAME}</div>
 <div >{usuarioFiltrado.ROLE}</div>
 </div>
)


        }
    )

    
}
    </div>
  )
}
