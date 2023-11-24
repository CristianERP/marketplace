import './header.css'
import { useState } from 'react'
import Navbar from './navbar/Navbar'
import UserCardOptions from './submenu/UserCardOptions'
import SubMenuOptions from './submenu/SubMenuOptions'

const Header = ({ handleShowInterface }) => {
  const [showSubMenu, setShowSubMenu] = useState(false)

  const handleShowMenu = () => {
    setShowSubMenu(!showSubMenu)
  }
  return (
    <header>
      <Navbar handleShowMenu={handleShowMenu} showSubMenu={showSubMenu} />
      {showSubMenu &&
        <div className='nav-submenu'>
          <UserCardOptions handleShowInterface={handleShowInterface} handleShowMenu={handleShowMenu} />
          <SubMenuOptions handleShowInterface={handleShowInterface} handleShowMenu={handleShowMenu} />
        </div>}
    </header>
  )
}

export default Header
