import axios from "axios"


const baseUrlProducts = 'https://api-rest-marketplace.onrender.com/api/products'

const getAllProducts = async (token) =>{
  const config = {
    credentials: 'same-origin',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const { data } = await axios.get(baseUrlProducts, config)
  return data
}

const deleteProduct = async (token, productId) => {
  const config = {
    credentials: 'same-origin',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const { data } = await axios.delete(baseUrlProducts + '/' + productId, config)
  return data
}

const updateProduct = async (token, productUpdateData) => {
  const config = {
    credentials: 'same-origin',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const { data } = await axios.put(baseUrlProducts + '/' + productUpdateData.id, productUpdateData, config)
  return data
}

export default { getAllProducts, deleteProduct, updateProduct}