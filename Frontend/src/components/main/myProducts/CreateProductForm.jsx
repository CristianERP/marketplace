import { useState } from 'react'
import './CreateProductForm.css'
import productServices from '../../../services/Products'

export default function CreateProductForm ({ hiddenCreateProduct, token, categoryOptions, updateProductsInformation }) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [description, setDescription] = useState('')
  const [idCategory, setIdCategory] = useState('')
  const [imageFile, setImageFile] = useState('')

  const checkPrice = (priceInput) => {
    if (isNaN(priceInput)) {
      // TODO: Hacer modal que advierta que solo se permiten numeros en el nit
      console.log('EL precio solo puede contener numeros')
    } else {
      setPrice(priceInput)
    }
  }

  const checkStock = (stockInput) => {
    if (isNaN(stockInput)) {
      // TODO: Hacer modal que advierta que solo se permiten numeros en el nit
      console.log('La cantidad solo puede contener numeros')
    } else {
      setStock(stockInput)
    }
  }

  const handleImagenChange = (event) => {
    // Actualizar el estado de la imagen al seleccionar un archivo
    const file = event.target.files[0]
    if (file) {
      setImageFile(file)
    }
  }

  const createProduct = async (event) => {
    event.preventDefault()
    // console.log(name)
    // console.log(price)
    // console.log(stock)
    // console.log(description)
    // console.log(idCategory)
    // console.log(imageFile)
    const formData = new FormData()
    formData.append('name', name)
    formData.append('price', price)
    formData.append('stock', stock)
    formData.append('description', description)
    formData.append('idCategory', idCategory)
    formData.append('imageFile', imageFile)

    try {
      const newProduct = await productServices.createProduct(token, formData)
      console.log(newProduct)
      updateProductsInformation()
      hiddenCreateProduct()
    } catch (error) {
      console.log('Ocurrio un error al crear el producto: ', error)
    }
  }

  return (
    <div className='create-product'>
      <form className='create-product--form' onSubmit={createProduct}>
        <label className='create-product--label'>
          <span>Nombre del producto</span>
          <input
            type='text'
            value={name}
            name='name'
            onChange={({ target }) => setName(target.value)}
            required
          />
        </label>
        <label className='create-product--label'>
          <span>Precio</span>
          <input
            type='text'
            value={price}
            name='price'
            onChange={({ target }) => checkPrice(target.value)}
            required
          />
        </label>
        <label className='create-product--label'>
          <span>Cantidad</span>
          <input
            type='text'
            value={stock}
            name='stock'
            onChange={({ target }) => checkStock(target.value)}
            required
          />
        </label>
        <label className='create-product--label'>
          <span>Descripción</span>
          <input
            type='text'
            value={description}
            name='description'
            onChange={({ target }) => setDescription(target.value)}
            required
          />
        </label>
        <label className='create-product--label'>
          <span>Categoría</span>
          <select
            value={idCategory}
            name='idCategory'
            onChange={({ target }) => setIdCategory(target.value)}
            required
          >
            <option />
            {categoryOptions.map((category) => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
        </label>
        <label className='create-product--label'>
          <span>Imagen</span>
          <input
            type='file'
            id='imageFile'
            name='imageFile'
            onChange={handleImagenChange}
            accept='image/*'
          />
        </label>
        <div className='create-product--btn-container'>
          <button onClick={hiddenCreateProduct}>Cancelar</button>
          <button>Crear producto</button>
        </div>
      </form>
    </div>
  )
}
