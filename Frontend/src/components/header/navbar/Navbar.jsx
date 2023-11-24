import { HamburguerIcon, SearchIcon, ShoppingCart, XIcon } from '../../icons'
import './navbar.css'

export default function Navbar ({ handleShowMenu, showSubMenu }) {
  return (
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
      <div className='nav-header-menu-switch' onClick={handleShowMenu}>
        {!showSubMenu && <HamburguerIcon />}
        {showSubMenu && <XIcon />}
      </div>
      <div className='nav-header-menu-switch'>
        <ShoppingCart />
      </div>
    </ul>
  )
}
