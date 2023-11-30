import { XIcon } from '../../icons'
import './selectedProductCard.css'

export default function SelectedProductCard ({ userLogged, selectedProduct, closeSelectedProduct }) {
  return (
    <article className='selected-product-card'>
      <span className='close-modal' onClick={closeSelectedProduct}><XIcon /></span>
      <div className='selected-product-card--image-container'><img src={selectedProduct.urlImage} alt='' /></div>
      <span className='selected-product-card--name'>Silla Escritorio Esgonomica Oficina de color negro</span>
      <div className='selected-product-card--price'>{selectedProduct.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</div>
      <span className='selected-product-card--seller'>Vendido por {selectedProduct.user.username}</span>
      <hr />
      <span className='selected-product-card--description-title'>Descripción del vendedor</span>
      <p className='selected-product-card--description'>selectedProduct.description</p>
      <hr />
      {(userLogged.id !== selectedProduct.user.id) &&
        <div className='selected-product-card--message-container'>
          <span>Envia un mensaje al vendedor</span>
          <textarea rows={2} />
          <button>Enviar</button>
        </div>}
    </article>
  )
}
