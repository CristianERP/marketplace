import { useEffect, useState } from 'react'
import { XIcon } from '../../icons'
import './selectedProductCard.css'
import ProductForm from '../myProducts/ProductForm'
import ordersServices from '../../../services/Orders'

export default function SelectedProductCard ({ userLogged, selectedProduct, closeSelectedProduct, isMyProduct, categoryOptions, hiddenCreateProduct, updateProductsInformation }) {
  const username = !isMyProduct ? selectedProduct.user.username : ''
  const [isEditProduct, setIsEditProduct] = useState(false)

  const [deliveryAddress, setDeliveryAddress] = useState('')
  const [amount, setAmount] = useState('0')
  const [total, setTotal] = useState('0')

  useEffect(() => {
    setTotal(amount * selectedProduct.price)
  }, [amount])

  function obtenerFechaActual () {
    const fecha = new Date()
    const año = fecha.getFullYear()
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0') // Sumar 1 porque los meses van de 0 a 11
    const dia = fecha.getDate().toString().padStart(2, '0')
    return `${año}-${mes}-${dia}`
  }

  const handleCheckAmount = (event) => {
    const inputAmount = event.target.value
    if (!isNaN(inputAmount) && Number.isInteger(Number(inputAmount)) && Number(inputAmount) <= selectedProduct.stock) {
      setAmount(inputAmount)
    } else {
      console.log('Debes ingresar una cantidad valida, entera y menor o igual al stock')
    }
  }

  const handleBuyProduct = async (event) => {
    event.preventDefault()
    if (amount > 0) {
      try {
        const date = obtenerFechaActual()
        const purchaseProductData = {
          date,
          deliveryAddress,
          status: 'Activo',
          detailOrder: [
            {
              idProduct: selectedProduct.id,
              amount,
              total
            }
          ]
        }
        const purchaseProduct = await ordersServices.buyProduct(userLogged.token, purchaseProductData)
        console.log('Producto comprado ', purchaseProduct)
        updateProductsInformation()
        closeSelectedProduct()
      } catch (error) {
        console.log('Ocurrio un error al comprar el producto', error)
      }
    } else {
      console.log('Debe ingresar una cantidad mayor a 0')
    }
  }
  return (
    <>
      {!isEditProduct &&
        <article className='selected-product-card'>
          <span className='close-modal' onClick={closeSelectedProduct}><XIcon /></span>
          <div className='selected-product-card--image-container'><img src={selectedProduct.urlImage} alt='' /></div>
          <span className='selected-product-card--name'>{selectedProduct.name}</span>
          <div className='selected-product-card--price'>{selectedProduct.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 2 })}</div>
          <div className='selected-product-card--price'>Stock: {selectedProduct.stock}</div>
          {(!isMyProduct) &&
            <span className='selected-product-card--seller'>Vendido por {username}</span>}
          <hr />
          <span className='selected-product-card--description-title'>Descripción del producto</span>
          <p className='selected-product-card--description'>Categoría: {selectedProduct.category.name}</p>
          <p className='selected-product-card--description'>{selectedProduct.description}</p>
          <hr />
          {(!isMyProduct) &&
            <form className='selected-product-card--form-container' onSubmit={handleBuyProduct}>
              <label>
                <span>Dirección de entrega: </span>
                <input
                  type='text'
                  value={deliveryAddress}
                  name='deliveryAddress'
                  onChange={({ target }) => setDeliveryAddress(target.value)}
                  required
                />
              </label>
              <label>
                <span>Cantidad: </span>
                <input
                  type='text'
                  value={amount}
                  name='amount'
                  onChange={handleCheckAmount}
                  required
                />
              </label>
              <label>
                <span>Total: </span>
                <span>{total}</span>
              </label>
              <button>Comprar</button>
            </form>}

          {(isMyProduct) &&
            <div className='selected-product-card--btn-container'>
              <button onClick={() => { setIsEditProduct(true) }}>Editar</button>
            </div>}
        </article>}

      {isEditProduct &&
        <ProductForm
          selectedProduct={selectedProduct}
          hiddenCreateProduct={hiddenCreateProduct}
          token={userLogged.token}
          categoryOptions={categoryOptions}
          updateProductsInformation={updateProductsInformation}
        />}
    </>
  )
}
