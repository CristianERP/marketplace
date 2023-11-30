import './header.css'
import { useState } from 'react'
import Navbar from './navbar/Navbar'
// import UserCardOptions from './submenu/UserCardOptions'
import SubMenuOptions from './submenu/SubMenuOptions'

const Header = ({ handleShowInterface, user, handleChangeUser }) => {
  const [showSubMenu, setShowSubMenu] = useState(false)

  const handleShowMenu = () => {
    setShowSubMenu(!showSubMenu)
  }

  return (
    <header className='header'>
      {user &&
        <Navbar
          handleShowMenu={handleShowMenu}
          showSubMenu={showSubMenu}
          handleShowInterface={handleShowInterface}
        />}

      {showSubMenu &&
        <div className='nav-submenu'>
          {/* {!user &&
            <UserCardOptions
              handleShowInterface={handleShowInterface}
              handleShowMenu={handleShowMenu}
            />} */}
          {user &&
            <SubMenuOptions
              handleShowInterface={handleShowInterface}
              handleShowMenu={handleShowMenu}
              handleChangeUser={handleChangeUser}
            />}
        </div>}
    </header>
  )
}

export default Header
