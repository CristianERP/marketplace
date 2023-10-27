import React from 'react';
// import { Link } from 'react-router-dom'

const AdminNav = ({ handleChangeUser, user }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="user-name">¡Hola, {user.username}!</span>
        <a href="/ventas">Usuarios</a>
        <a href="/pedidos">Configuraciones</a>
        {/* Otros enlaces relacionados con el usuario */}
      </div>
      <div className="nav-right">
        <button className="logout-button" onClick={handleChangeUser}>
          Cerrar Sesión
        </button>
      </div>
    </nav>
  )
}

export default AdminNav;
