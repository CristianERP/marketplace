import { XIcon } from '../../icons'
import './selectedProductCard.css'

export default function SelectedProductCard ({ userLogged, selectedProduct, closeSelectedProduct, isMyProduct }) {
  const username = !isMyProduct ? selectedProduct.user.username : ''
  return (
    <article className='selected-product-card'>
      <span className='close-modal' onClick={closeSelectedProduct}><XIcon /></span>
      <div className='selected-product-card--image-container'><img src={selectedProduct.urlImage} alt='' /></div>
      <span className='selected-product-card--name'>{selectedProduct.name}</span>
      <div className='selected-product-card--price'>{selectedProduct.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
      <div className='selected-product-card--price'>Stock: {selectedProduct.stock}</div>
      {(!isMyProduct) &&
        <span className='selected-product-card--seller'>Vendido por {username}</span>}
      <hr />
      <span className='selected-product-card--description-title'>Descripción del producto</span>
      <p className='selected-product-card--description'>Categoría: {selectedProduct.category.name}</p>
      <p className='selected-product-card--description'>{selectedProduct.description}</p>
      <hr />
      {(!isMyProduct) &&
        <div className='selected-product-card--message-container'>
          <button>Comprar</button>
        </div>}

      {(isMyProduct) &&
        <div className='selected-product-card--message-container'>
          <button>Editar</button>
        </div>}
    </article>
  )
}
