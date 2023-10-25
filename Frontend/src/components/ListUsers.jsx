import { useEffect, useState } from 'react'
import './Form.css'
import userServices from '../services/User'

export const ListUsers = ( { token } ) => {

  const [users, setUsers] = useState(null)
  
  const handleUsers = async (event) => {
    event.preventDefault()
    try {
      console.log(token)
      console.log('trayendo usuarios')
      const usuarios = await userServices.getAllUsers(token)
      console.log(usuarios)
      setUsers(usuarios)

    } catch (e) {
      console.log('Error trayendo los usuarios')
      console.log(e)
    }
  }
  // useEffect(() => {
  //   userServices.getAllUsers(token).then((users) => {
  //     setUsers(users)
  //   })
  //   .catch((error) => {
  //     console.log('ocurrio un error')
  //     console.log(error)
  //   })
  // },[])


  return(
    <div className='square listUsers'>
      {/* {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))} */}

      <button onClick={handleUsers}>Prueba</button>
    </div>
  )
}