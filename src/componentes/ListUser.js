import { useState, useEffect } from 'react';

import React from 'react'

const url = "http://localhost:5000/users";

/*funcion buscarPublicaiones, necesaria para extraer los datos de la url que le pasamos*/
async function fetchPosts() {
    const respuesta = await fetch(url);
    const infoUser = await respuesta.json();
    return infoUser;
  }

  function ListUser() {
    /*almacena la lista de ususrios del servidor */
    const [cargaUser, setCargaUser] = useState([]);

    /*carga la lista de usuarios del servidor, pasamos la funcion fetchPosts
    y userBuscado acualiza el estado de cargarUser */
    useEffect(function () {
      fetchPosts().then((userBuscado) => setCargaUser(userBuscado));
    }, []);


    return (
      <div>
          <ul>
          {cargaUser.map((post) => (
            <li key={post.id}>{post.name}  


            <button onClick={()=>{
              // console.log(post);
              <ul>
                <li>{post.name}</li>
                <li>{post.phone}</li>
                <li>{post.email}</li>
              </ul>  
            }}>Mostrar todos</button>
            
            </li>
          ))}
        </ul>
      </div>
  
    );
  }
  
  export default ListUser;