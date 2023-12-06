import { useEffect, useState } from 'react'
import './shopping.css'
import ordersServices from '../../../services/Orders'
import SelectedProductCard from '../modals/SelectedProductCard'

export default function Shopping ({ userLogged, updateProductsInformation }) {
  const [selectedProduct, setSelectedProduct] = useState()
  const [myOrders, setMyOrders] = useState()

  useEffect(() => {
    getOrders()
  }, [])

  const handleProductClick = (product) => {
    setSelectedProduct(product)
  }

  const closeSelectedProduct = () => {
    setSelectedProduct(null)
  }

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
          <article className='product-card' key={order.id} onClick={() => handleProductClick(order.detailOrder[0].product)}>
            <div className='product-card--image-container'><img src={order.detailOrder[0].product.urlImage} alt='Imagen de la pantalla de un pc' /></div>
            <div className='product-card--price'>{order.detailOrder[0].product.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
            <span className='product-card--name'>{order.detailOrder[0].product.name}</span>
          </article>))}
      </div>

      {selectedProduct &&
        <SelectedProductCard
          userLogged={userLogged}
          selectedProduct={selectedProduct}
          closeSelectedProduct={closeSelectedProduct}
          updateProductsInformation={updateProductsInformation}
          isOrder
        />}
    </section>
  )
}
