import './home.css'
import productsServices from './../../../services/Products'
import { useEffect, useState } from 'react'
import SelectedProductCard from '../modals/SelectedProductCard'

export default function Home ({ userLogged }) {
  const price2 = 234234
  const [products, setProducts] = useState()
  const [selectedProduct, setSelectedProduct] = useState()

  useEffect(() => {
    async function fetchData () {
      const data = await productsServices.getAllProducts(userLogged.token)
      const productsData = data.filter((product) => {
        if (product.user.id === userLogged.id && product.stock > 0) {
          return false
        }
        return product
      })
      setProducts(productsData)
      console.log('se ha actualizado la lista de productos')
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
      )
      )}
        {selectedProduct &&
          <SelectedProductCard
            userLogged={userLogged}
            selectedProduct={selectedProduct}
            closeSelectedProduct={closeSelectedProduct}
          />}

        <article className='product-card'>
          <div className='product-card--image-container'>Imagen</div>
          <div className='product-card--price'>{price2.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
          <span className='product-card--name'>Silla Escritorio Esgonomica Oficina de color negro</span>
          <span className='product-card--seller'>Vendido por</span>
        </article>

        <article className='product-card'>
          <div className='product-card--image-container'>Imagen</div>
          <div className='product-card--price'>{price2.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
          <span className='product-card--name'>Silla Escritorio Esgonomica Oficina de color negro</span>
          <span className='product-card--seller'>Vendido por</span>
        </article>

        <article className='product-card'>
          <div className='product-card--image-container'>Imagen</div>
          <div className='product-card--price'>{price2.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
          <span className='product-card--name'>Silla Escritorio Esgonomica Oficina de color negro</span>
          <span className='product-card--seller'>Vendido por</span>
        </article>
      </div>
    </section>
  )
}
