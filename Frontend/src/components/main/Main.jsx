import './main.css'
import Login from './login/Login'
import CreateAccount from './createAccount/CreateAccount'
import Home from './home/Home'
import Notifications from './notifications/Notifications'
import Shopping from './shopping/Shopping'
import Sales from './sales/Sales'
import Products from './myProducts/Products'
import Account from './account/Account'
import { useEffect, useState } from 'react'
import productsServices from '../../services/Products'
import ordersServices from '../../services/Orders'

const Main = ({ showInterface, handleShowInterface, userLogged, handleChangeUser, categoryOptions }) => {
  const [productsHome, setProductsHome] = useState()
  const [myProducts, setMyProducts] = useState()
  const [myOrders, setMyOrders] = useState()

  useEffect(() => {
    if (userLogged) {
      fetchDataProducts()
      fetchDataProductsUser()
      fetchDataMyOrders()
    } else {
      setProductsHome(null)
      setMyProducts(null)
      setMyOrders(null)
    }
  }, [userLogged])

  async function fetchDataProducts () {
    try {
      const productsData = await productsServices.getAllProducts(userLogged.token)
      const productsDataHome = productsData.filter((product) => {
        if (product.user.id !== userLogged.id && product.stock > 0) {
          return product
        }
        return false
      })
      setProductsHome(productsDataHome)
    } catch (error) {
      console.log('Ocurrio un error trayendo los productos de otros usuarios')
    }
  }

  async function fetchDataProductsUser () {
    console.log('trayendo...')
    try {
      const myproductsData = await productsServices.getAllProductsByUser(userLogged.token)
      setMyProducts(myproductsData)
    } catch (error) {
      console.log('Ocurrio un error trayendos los productos del usuario', error)
    }
  }

  async function fetchDataMyOrders () {
    try {
      const myOrdersData = await ordersServices.getAllOrdersByUser(userLogged.token)
      console.log(myOrdersData)
      setMyOrders(myOrdersData)
    } catch (error) {
      console.log('Ocurrio un error al traer las ordenes de compra ', error)
    }
  }

  const updateProductsInformation = () => {
    fetchDataProducts()
    fetchDataProductsUser()
    fetchDataMyOrders()
  }

  return (
    <main>
      {((showInterface === 'LoginInterface' && !userLogged) && !userLogged) &&
        <Login
          handleChangeUser={handleChangeUser}
          handleShowInterface={handleShowInterface}
        />}
      {(showInterface === 'CreateAccountInterface') &&
        <CreateAccount
          handleShowInterface={handleShowInterface}
        />}
      {(showInterface === 'HomeInterface' && userLogged) &&
        <Home
          userLogged={userLogged}
          productsData={productsHome}
          updateProductsInformation={updateProductsInformation}
        />}
      {(showInterface === 'NotificationInterface') &&
        <Notifications />}
      {(showInterface === 'MyShoppingInterface') &&
        <Shopping
          userLogged={userLogged}
          myOrders={myOrders}
        />}
      {(showInterface === 'MySalesInterface') &&
        <Sales />}
      {(showInterface === 'MyProductsInterface') &&
        <Products
          userLogged={userLogged}
          products={myProducts}
          categoryOptions={categoryOptions}
          updateProductsInformation={updateProductsInformation}
        />}
      {(showInterface === 'MyAccountInterface') &&
        <Account />}
    </main>
  )
}

export default Main
