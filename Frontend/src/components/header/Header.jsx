import './header.css'
import { useState } from 'react'
import Navbar from './navbar/Navbar'
import UserCardOptions from './submenu/UserCardOptions'
import SubMenuOptions from './submenu/SubMenuOptions'

const Header = ({ handleShowInterface }) => {
  const [showSubMenu, setShowSubMenu] = useState(false)
  const [showUserOption, setUserOption] = useState(false)

  const handleShowMenu = () => {
    setShowSubMenu(!showSubMenu)
  }
  const handleShowUserOption = () => {
    setUserOption(!showUserOption)
  }
  return (
    <header className='header'>
      <Navbar handleShowMenu={handleShowMenu} showSubMenu={showSubMenu} showUserOption={showUserOption} handleShowUserOption={handleShowUserOption} handleShowInterface={handleShowInterface} />
      {showSubMenu &&
        <div className='nav-submenu'>
          <UserCardOptions handleShowInterface={handleShowInterface} handleShowMenu={handleShowMenu} handleShowUserOption={handleShowUserOption} />
          <SubMenuOptions handleShowInterface={handleShowInterface} handleShowMenu={handleShowMenu} />
        </div>}
    </header>
  )
}

export default Header
