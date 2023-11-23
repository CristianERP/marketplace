import './header.css'
import { SearchIcon, HamburguerIcon, ShoppingCart, UserIcon, XIcon, HomeIcon } from '../icons'
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
              <span>Imagen</span>
              <p>Texto</p>
            </li>
            <li className='submenu-option-card'>
              <span>Imagen</span>
              <p>Texto</p>
            </li>
            <li className='submenu-option-card'>
              <span>Imagen</span>
              <p>Texto</p>
            </li>
          </ul>
        </div>}
    </header>
  )
}

export default Header
