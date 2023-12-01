import { BellIcon, ClipBoardListIcon, HomeIcon, SalesIcon, ShoppingBagIcon, UserIcon } from '../../icons'
import './submenu.css'
import services from '../../../services/category'
import { useEffect, useState } from 'react'

export default function SubMenuOptions ({ openSubmenu, handleShowInterface, handleShowMenu, handleChangeUser, user }) {
  const [categories, setCategories] = useState()

  useEffect(() => {
    async function getCategories () {
      try {
        const dataCategories = await services.getCategories(user.token)
        setCategories(dataCategories)
        console.log(categories)
      } catch (error) {
        console.log('Ocurrio un error: ', error)
      }
    }
    getCategories()
  }, [user])

  const handleShowHome = () => {
    handleShowInterface('HomeInterface')
    handleShowMenu()
  }
  const handleShowNotification = () => {
    handleShowInterface('NotificationInterface')
    handleShowMenu()
  }
  const handleShowMyShopping = () => {
    handleShowInterface('MyShoppingInterface')
    handleShowMenu()
  }
  const handleMySales = () => {
    handleShowInterface('MySalesInterface')
    handleShowMenu()
  }
  const handleShowMyProducts = () => {
    handleShowInterface('MyProductsInterface')
    handleShowMenu()
  }
  const handleMyAccount = () => {
    handleShowInterface('MyAccountInterface')
    handleShowMenu()
  }
  const handleLogOut = () => {
    handleShowInterface('LoginInterface')
    handleChangeUser()
    handleShowMenu()
  }
  return (
    <ul className={`nav-submenu-options ${openSubmenu}`}>
      <li className='submenu-option-card' onClick={handleShowHome}>
        <span><HomeIcon /></span>
        <p>Inicio</p>
      </li>
      <li className='submenu-option-card' onClick={handleShowNotification}>
        <span><BellIcon /></span>
        <p>Notificaciones</p>
      </li>
      <li className='submenu-option-card' onClick={handleShowMyShopping}>
        <span><ShoppingBagIcon /></span>
        <p>Mis compras</p>
      </li>
      <li className='submenu-option-card' onClick={handleMySales}>
        <span><SalesIcon /></span>
        <p>Mis ventas</p>
      </li>
      <li className='submenu-option-card' onClick={handleShowMyProducts}>
        <span><ClipBoardListIcon /></span>
        <p>Mis productos</p>
      </li>
      <li className='submenu-option-card' onClick={handleMyAccount}>
        <span><UserIcon /></span>
        <p>Mi cuenta</p>
      </li>
      <li className='submenu-option-card' onClick={handleLogOut}>
        <span><UserIcon /></span>
        <p>Cerrar sesión</p>
      </li>
      <hr />
      <span className='categories-title'>Categorias</span>
      {categories &&
      categories.map((category) => (
        <li className='submenu-option-card' key={category.id}>
          <span><UserIcon /></span>
          <p>{category.name}</p>
        </li>
      ))}
    </ul>
  )
}
