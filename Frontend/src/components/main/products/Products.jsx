import { useEffect, useState } from 'react'
import './products.css'
import './../home/home.css'
import productsServices from './../../../services/Products'
import SelectedProductCard from '../modals/SelectedProductCard'

export default function Products ({ userLogged }) {
  const [products, setProducts] = useState()
  const [selectedProduct, setSelectedProduct] = useState()

  useEffect(() => {
    async function fetchData () {
      const data = await productsServices.getAllProducts(userLogged.token)
      const myProducts = data.filter((product) => {
        if (product.user.id === userLogged.id) {
          return product
        }
        return false
      })
      console.log(products)
      setProducts(myProducts)
    }
    fetchData()
  }, [])

  const handleProductClick = (product) => {
    setSelectedProduct(product)
  }

  const closeSelectedProduct = () => {
    setSelectedProduct()
  }

  return (
    <section className='home'>
      <div className='products-container'>
        {products &&
        products.map((product) => (
          <article className='product-card' key={product.id} onClick={() => handleProductClick(product)}>
            <div className='product-card--image-container'><img src={product.urlImage} alt='Imagen de la pantalla de un pc' /></div>
            <div className='product-card--price'>{product.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
            <span className='product-card--name'>{product.name}</span>
            <span className='product-card--seller'>Vendido por {product.user.username}</span>
          </article>
        ))}
      </div>

      {selectedProduct &&
        <SelectedProductCard
          userLogged={userLogged}
          selectedProduct={selectedProduct}
          closeSelectedProduct={closeSelectedProduct}
        />}
    </section>
  )
}
