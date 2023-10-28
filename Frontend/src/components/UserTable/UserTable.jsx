import React from 'react';
import { useEffect, useState } from 'react';
import userServices from '../../services/User'
import "./UserTable.css"
import Modal from '../Modal/Modal';


const UserTable = ({ user }) => {
  const [users, setUsers] = useState([])
  const [selectedUserUpdate, setSelectedUserUpdate] = useState(null)
  const [selectedUserDelete, setSelectedUserDelete] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const data = await userServices.getAllUsers(user.token)
      setUsers(data)
    }
    fetchData()
  })


  const handleClickUpdate = (user) => {
    setSelectedUserUpdate(user)
  }
  const handleUpdateUser = async (updateUser) => {
    console.log('antes de actualizar el usuario en BD ', updateUser)
    try {
      console.log('actualizando usuario')
      const userUpdate = await userServices.updateUser(user.token, updateUser)
      handleCloseModal()
      console.log('usuario actualizado: ', userUpdate)
    } catch (error) {
      console.log('error al actualizar el usuario', error)
    }
  }

  const handleClickDelete = (user) => {
    setSelectedUserDelete(user)
  }
  const handleDeleteUser = async () => {
    try {
      await userServices.deleteUser(user.token, selectedUserDelete.id);
      const updatedUsers = users.filter(user => user.id !== selectedUserDelete.id);
      setUsers(updatedUsers);
      setSelectedUserDelete(null);
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  }

  const handleCloseModal = () => {
    setSelectedUserUpdate(null);
    setSelectedUserDelete(null);
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
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.role}</td>
              <td>{user.username}</td>
              <td>
                <button onClick={() => handleClickUpdate(user)}>Actualizar</button>
                <button onClick={() => handleClickDelete(user)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {(selectedUserDelete || selectedUserUpdate) && (
        <Modal
          user={selectedUserDelete ?? selectedUserUpdate}
          handleClose={handleCloseModal}
          handleFunction={selectedUserDelete ? handleDeleteUser : handleUpdateUser}
          isDelete={selectedUserDelete ? true : false}
        />
      )}
    </div>
  )
}

export default UserTable;
