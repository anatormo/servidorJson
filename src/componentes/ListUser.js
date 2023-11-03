
import { useState, useEffect } from 'react';

const url = "http://localhost:5000/users";

/*funcion buscarPublicaiones, 
necesaria para extraer los datos de la url que le pasamos*/
async function fetchPosts() {
  const response = await fetch(url);
  const infoUser = await response.json();
  return infoUser;
}

function ListUser() {
  /*almacena la lista de ususrios del servidor */
  const [cargaUser, setCargaUser] = useState([]);
  
  /*carga la lista de usuarios del servidor, pasamos la funcion fetchPosts
  y userBuscado acualiza el estado de cargarUser */
  useEffect(() => {
    fetchPosts().then((userBuscado) => setCargaUser(userBuscado));
  }, []);

/*almacena los id de ususrios del servidor */
const [selectUser, setSelectUser] = useState();
/*funcion para ver los id de ususrios del servidor */
  function verUser (user) {
    setSelectUser(user);
  };
  /*el return recorre la lista de los usuarios y le pasamos el user de la 
  funcion verUser para que nos de la info del usuario seleccionado */
  return (
    <div>
      <ul>
        {cargaUser.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => verUser(user)}>Mostrar todos</button>
          </li>
        ))}
      </ul>
      {selectUser && (
        <div>
          <ul>
            <li>{selectUser.name}</li>
            <li>{selectUser.phone}</li>
            <li>{selectUser.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ListUser;
