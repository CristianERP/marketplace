import { useEffect, useState } from 'react'
import './shopping.css'
import ordersServices from '../../../services/Orders'

export default function Shopping ({ userLogged }) {
  const [myOrders, setMyOrders] = useState()
  const [detailOrders, setDetailOrders] = useState()
  const [myPurchasedProducts, setMyPurchasedProducts] = useState()

  useEffect(() => {
    getOrders()
  }, [])

  useEffect(() => {
    if (myOrders) {
      const detailOrdersData = myOrders.detailOrder
      setDetailOrders(detailOrdersData)
    }
  }, [myOrders])

  const getOrders = async () => {
    try {
      const myOrdersData = await ordersServices.getAllOrdersByUser(userLogged.token)
      console.log(myOrdersData)
      setMyOrders(myOrdersData)
    } catch (error) {
      console.log('Ocurrio un error al traer las ordenes de compra ', error)
    }
  }
  return (
    <section className='my-purchased-products'>
      <div className='products-container'>
        {myOrders &&
        myOrders.map((order) => (
          <article className='product-card' key={order.id}>
            <div className='product-card--image-container'><img src={order.detailOrder[0].product.urlImage} alt='Imagen de la pantalla de un pc' /></div>
            <div className='product-card--price'>{order.detailOrder[0].product.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
            <span className='product-card--name'>{order.detailOrder[0].product.name}</span>
          </article>))}

      </div>
    </section>
  )
}
