import axios from 'axios'

const baseUrlLogin = 'http://localhost:8094/auth/login'

const login = async credentials => {
  const { data } = await axios.post(baseUrlLogin, credentials)
  return data
}

export default { login }
  