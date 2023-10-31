
import { useState, useEffect } from 'react'
import productsServices from '../../services/Product'
import ModalProducts from './ModalProducts'

const ProductsTable = ({ user }) => {
  const [products, setProducts] = useState([])
  const [selectedProductUpdate, setSelectedProductUpdate] = useState(null)
  const [selectedProductDelete, setSelectedProductDelete] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const data = await productsServices.getAllProducts(user.token)
      setProducts(data)
    }
    fetchData()
  })


  const handleClickUpdate = (product) => {
    setSelectedProductUpdate(product)
  }
  const handleUpdateProduct = async (updateProduct) => {
    console.log('antes de actualizar el producto en BD ', updateProduct)
    try {
      console.log('actualizando producto')
      const productUpdate = await productsServices.updateProduct(user.token, updateProduct)
      handleCloseModal()
      console.log('producto actualizado: ', productUpdate)
    } catch (error) {
      console.log('error al actualizar el producto', error)
    }
  }

  const handleClickDelete = (product) => {
    setSelectedProductDelete(product)
  }
  const handleDeleteProduct = async () => {
    try {
      await productsServices.deleteProduct(user.token, selectedProductDelete.id);
      const updatedProducts = products.filter(product => product.id !== selectedProductDelete.id);
      setProducts(updatedProducts);
      setSelectedProductDelete(null);
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  }

  const handleCloseModal = () => {
    setSelectedProductUpdate(null);
    setSelectedProductDelete(null);
  }


  return (
    <div className="user-table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Usuario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
              <td>{product.stock}</td>
              <td>{product.userId}</td>
              {<td>
                <button onClick={() => handleClickUpdate(product)}>Actualizar</button>
                {/* TODO: Hay que hacer que el usuario que crea el producto sea el que lo pueda editar */}
                <button onClick={() => handleClickDelete(product)}>Eliminar</button>
              </td>}
            </tr>
          ))}
        </tbody>
      </table>

      {(selectedProductDelete || selectedProductUpdate) && (
        <ModalProducts
          product={selectedProductDelete ?? selectedProductUpdate}
          handleClose={handleCloseModal}
          handleFunction={selectedProductDelete ? handleDeleteProduct : handleUpdateProduct}
          isDelete={selectedProductDelete ? true : false}
        />
      )}
    </div>
  )
}

export default ProductsTable;