import React from 'react'
import { useState } from 'react';
import "./styleMAqueta.css"

export default function Front() {
    const [editar, setEditar] = useState(true);
    const [nombre, setNombre] = useState("Lore");
    const [nick, setNick] = useState("loreuwu");
    const [correo, setCorreo] = useState("example@unet.edu.ve");
    const [etiquetas, setEtiquetas] = useState("hola,chao");
    const [correoValido, setCorreoValido] = useState(true);
    
    const checarCorreo = function(e){
        let _string = e.target.value;
        _string = _string.toLowerCase();
        if(_string.indexOf("@unet.edu.ve") != -1){
            setCorreoValido(true);
        } else setCorreoValido(false);
        setCorreo(_string);
    }
    const cambiarEditar = function(){
        setEditar(!editar);
    }
    let displayCorreoInvalidoState = correoValido? "none" : "block";
    return (
    
    <div className='allApp'>
        <span className='edit-button' onClick={(e)=>{cambiarEditar()}}>{!editar ? "Editar" : "Guardar"}</span>
        <div className="flex-header-section">
            <div className="img-container flex-item-profile">      
            </div>
            <div className="profile-info-container flex-item-profile">
                <span className="profile-item">
                    <h1 style={{display: editar ? "none" : "block"}} className="profile-name">{nombre}</h1> 
                    <input style={{display: !editar ? "none" : "block"}} className ='input-edit'  value={nombre} onChange={(e)=>{setNombre(e.target.value);}}/>
                </span>
                <span className="profile-item">
                    <p style={{display: editar ? "none" : "block"}} className='nombre-mostrar'>{nick}</p>
                    <input style={{display: !editar ? "none" : "block"}} className ='input-edit' value={nick} onChange={(e)=>{setNick(e.target.value);}}/>
                </span>
                <span className="profile-item">
                    <p style={{display: editar ? "none" : "block"}} className="correo"> loremIpsum@unet.edu.ve</p>
                    <input style={{display: !editar ? "none" : "block"}} className ='input-edit' value={correo} onChange={(e)=>{checarCorreo(e)}}/>
                    <p style={{display : displayCorreoInvalidoState}} className='input-error-text'> Correo Invalido</p>
                </span>
                <span className="profile-item">
                    <p style={{display: editar ? "none" : "block"}} className='etiquetas'>{etiquetas}</p>
                    <input style={{display: !editar ? "none" : "block"}} className ='input-edit' value={etiquetas} onChange={(e)=>{setEtiquetas(e.target.value);}}/>
                </span>
            </div>
        </div>
        <div className="main-container">
            <h3 className="info">
                Carrera:  , Semestre:;
            </h3>
            <h4> Materias:</h4>
            <ul className='materia-list'>
                <li>|</li>
                <li>|</li>
                <li>|</li>
                <li>|</li>
            </ul>
        </div>
    </div>
  )
}
