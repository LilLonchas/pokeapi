import React from "react";
import { useParams } from "react-router-dom";

const Contact = () => {
  const { name } = useParams();
  const avatarUrl = `https://ui-avatars.com/api/?name=${name}&background=random`;

  return (
    <div>
      <h1>Contacto</h1>
      <h3>Nombre del usuario: {name}</h3>
      <img src={avatarUrl} alt={name} />
    </div>
  );
};

export default Contact;
