import './header.css'
import { SearchIcon, HamburguerIcon, ShoppingCart, UserIcon, XIcon, HomeIcon, BellIcon, ClipBoardListIcon, ShoppingBagIcon, SalesIcon } from '../icons'
import { useState } from 'react'

const Header = () => {
  const [showSubMenu, setShowSubMenu] = useState(false)

  const handleToggle = () => {
    setShowSubMenu(!showSubMenu)
  }
  return (
    <header>
      <ul className='navbar'>
        <li className='icon-page'><h3>Market</h3></li>
        <form className='nav-search'>
          <div className='nav-search-container'>
            <button className='search-btn'>
              <SearchIcon />
            </button>
            <input className='search-bar' type='text' placeholder='Estoy buscando...' />
          </div>
        </form>
        <div className='nav-header-menu-switch' onClick={handleToggle}>
          {!showSubMenu && <HamburguerIcon />}
          {showSubMenu && <XIcon />}
        </div>
        <div className='nav-header-menu-switch'>
          <ShoppingCart />
        </div>
      </ul>
      {showSubMenu &&
        <div className='nav-submenu'>
          <section className='create-account-menu'>
            <div className='create-account-menu-message'>
              <span><UserIcon /></span>
              <div>
                <h4>Bienvenido</h4>
                <p>Ingresa a tu cuenta para ver tus compras</p>
              </div>
            </div>
            <div className='create-account-menu-btn'>
              <button className='btn-login'>Ingresa</button>
              <button className='btn-create-account'>Crea tu cuenta</button>
            </div>
          </section>
          <ul className='nav-submenu-options'>
            <li className='submenu-option-card'>
              <span><HomeIcon /></span>
              <p>Inicio</p>
            </li>
            <li className='submenu-option-card'>
              <span><BellIcon /></span>
              <p>Notificaciones</p>
            </li>
            <li className='submenu-option-card'>
              <span><ShoppingBagIcon /></span>
              <p>Mis compras</p>
            </li>
            <li className='submenu-option-card'>
              <span><SalesIcon /></span>
              <p>Mis ventas</p>
            </li>
            <li className='submenu-option-card'>
              <span><ClipBoardListIcon /></span>
              <p>Mis productos</p>
            </li>
            <li className='submenu-option-card'>
              <span><UserIcon /></span>
              <p>Mis cuenta</p>
            </li>
          </ul>
        </div>}
    </header>
  )
}

export default Header
