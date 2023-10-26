import axios from 'axios'

const baseUrlUser = 'https://api-rest-marketplace.onrender.com/api'
// const baseUrlUser = 'http://localhost:8094/api'

const getAllUsers = async (token) => {
  const config = {
    credentials: 'same-origin',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const { data } = await axios.get(baseUrlUser + '/users', config)
  return data
}


export default { getAllUsers }