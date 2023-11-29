import { HamburguerIcon, SearchIcon, ShoppingCart, XIcon, CircleArrowLeftIcon } from '../../icons'
import './navbar.css'

export default function Navbar ({ handleShowMenu, showSubMenu, showUserOption, handleShowUserOption, handleShowInterface }) {
  const handleToggle = () => {
    if (showUserOption) handleShowUserOption()
    handleShowInterface('HomeInterface')
  }
  return (
    <ul className='navbar'>
      {showUserOption &&
        <span className='navbar-go-back' onClick={handleToggle}><CircleArrowLeftIcon /></span>}
      <li className='icon-page' onClick={handleToggle}><h3>Market</h3></li>
      {!showUserOption &&
        <form className='nav-search'>
          <div className='nav-search-container'>
            <button className='search-btn'>
              <SearchIcon />
            </button>
            <input className='search-bar' type='text' placeholder='Estoy buscando...' />
          </div>
        </form>}
      {!showUserOption &&
        <div className='nav-header-menu-switch' onClick={handleShowMenu}>
          {!showSubMenu && <HamburguerIcon />}
          {showSubMenu && <XIcon />}
        </div>}
      {!showUserOption &&
        <div className='nav-header-menu-switch'>
          <ShoppingCart />
        </div>}
    </ul>
  )
}
