import { useEffect } from 'react'
import './shopping.css'
import ordersServices from '../../../services/Orders'

export default function Shopping ({ userLogged }) {
  useEffect(() => {
    getOrders()
  }, [])

  const getOrders = async () => {
    try {
      const myOrders = await ordersServices.getAllOrdersByUser(userLogged.token)
      console.log(myOrders)
    } catch (error) {
      console.log('Ocurrio un error al traer las ordenes de compra ', error)
    }
  }
  return (
    <h1>Mis Compras</h1>
  )
}
