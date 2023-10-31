import React, { useState } from 'react';
import './AdminNav.css'
// import { Link } from 'react-router-dom'

const AdminNav = ({ handleChangeUser, user, handleShowUserTable, handleShowProductsTable }) => {

  const [showConfigurationInterface, setShowConfigurationInterface] = useState(false) //cambiar cuando se tenga pagina de config

  const showUserTable = () => {
    handleShowUserTable(true)
    setShowConfigurationInterface(false)
    handleShowProductsTable(false)
  }

  const showConfigurations = () => {
    handleShowUserTable(false)
    setShowConfigurationInterface(true)
    handleShowProductsTable(false)
  }

  const showProducts = () => {
    handleShowUserTable(false)
    setShowConfigurationInterface(false)
    handleShowProductsTable(true)
  }

  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="user-name">¡Hola, {user.username}!</span>
        <p className='section-buttons' onClick={showUserTable}>Usuarios</p>
        <p className='section-buttons' onClick={showConfigurations}>Configuraciones</p>
        <p className='section-buttons' onClick={showProducts}>Productos</p>
        {/* Otros enlaces relacionados con el usuario */}
      </div>
      <div className="nav-right" onClick={handleChangeUser}>
        <button className="logout-button">
          Cerrar Sesión
        </button>
      </div>
    </nav>
  )
}

export default AdminNav;
