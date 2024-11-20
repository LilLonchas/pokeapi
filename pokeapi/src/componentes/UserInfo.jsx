import React from 'react';
import { useParams } from 'react-router-dom';

const UserInfo = () => {
  const { name } = useParams();

  return (
    <div>
      <h2>Información de Usuario: {name}</h2>
      <p>Aquí puedes ver los detalles de {name}.</p>
    </div>
  );
}

export default UserInfo;
