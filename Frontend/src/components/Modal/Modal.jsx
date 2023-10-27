import React from 'react';
import "./Modal.css"

const Modal = ({ user, handleClose, handleUpdate, handleDelete }) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Teléfono: {user.phoneNumber}</p>
        {/* Otras propiedades del usuario aquí */}
        <div className="modal-buttons">
          <button onClick={handleUpdate}>Actualizar</button>
          <button onClick={handleDelete}>Eliminar</button>
          <button onClick={handleClose}>Cerrar</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
