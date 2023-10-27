import React from 'react';
import { useEffect, useState } from 'react';
import userServices from '../../services/User'
import "./UserTable.css"
import Modal from '../Modal/Modal';


const UserTable = ({ user }) => {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const data = await userServices.getAllUsers(user.token)
      setUsers(data)
    }
    fetchData()
  }, [])

  const handleRowClick = (user) => {
    console.log(user)
    setSelectedUser(user);
  }

  const handleUpdateUser = () => {
    // Implementa la lógica para actualizar el usuario aquí
  }

  const handleCloseModal = () => {
    setSelectedUser(null);
  }
  const handleDeleteUser = async () => {
    try {
      await userServices.deleteUser(user.token, selectedUser.id);
      const updatedUsers = users.filter(user => user.id !== selectedUser.id);
      setUsers(updatedUsers);
      setSelectedUser(null);
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  }

  return (
    <div className="user-table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Rol</th>
            <th>Usuario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} onClick={() => handleRowClick(user)}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.role}</td>
              <td>{user.username}</td>
              <td>
                <button>Actualizar</button>
                <button>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <Modal
          user={selectedUser}
          handleClose={handleCloseModal}
          handleUpdate={handleUpdateUser}
          handleDelete={handleDeleteUser}
        />
      )}
    </div>
  )
}

export default UserTable;
