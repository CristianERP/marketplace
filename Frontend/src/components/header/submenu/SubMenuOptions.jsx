import { BellIcon, ClipBoardListIcon, HomeIcon, SalesIcon, ShoppingBagIcon, UserIcon } from '../../icons'
import './submenu.css'

export default function SubMenuOptions ({ handleShowInterface, handleShowMenu }) {
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
  return (
    <ul className='nav-submenu-options'>
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
        <p>Mis cuenta</p>
      </li>
    </ul>
  )
}
