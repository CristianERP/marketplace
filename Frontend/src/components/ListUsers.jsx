import { useEffect, useState } from 'react'
import './Form.css'
import userServices from '../services/User'

export const ListUsers = ({ token }) => {

  const [users, setUsers] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const usuarios = await userServices.getAllUsers(token)
      console.log(usuarios)
      setUsers(usuarios)
    }
    fetchData()
  }, [])

  return (
    <div className='square listUsers'>
      {users && users.map((user) => (
        <article key={user.id} className='square'>
            <h6>{user.name}</h6>
            <span>{user.username}</span>
            <span>s</span>
        </article>
        )
      )}
    </div>
  )
}