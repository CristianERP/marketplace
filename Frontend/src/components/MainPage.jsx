import { useEffect, useState } from 'react'
import './Form.css'
import AdminNav from './Nav/AdminNav'
import Nav from './Nav/Nav'
import UserTable from './UserTable/UserTable'
import ProductsTable from './ProductsTable/ProductsTable'


export const MainPage = ({ handleChangeUser, user }) => {

  const [showUserTable, setShowUserTable] = useState(true)
  const [showProductsTable, setShowProductsTable] = useState(false)

  const handleShowUserTable = (stateUser) => {
    setShowUserTable(stateUser)
  }

  const handleShowProductsTable = (state) => {
    setShowProductsTable(state)
  }

  return (
    <section>
      {user.role === "admin" ?
        <AdminNav handleChangeUser={handleChangeUser}
          user={user}
          handleShowUserTable={handleShowUserTable}
          handleShowProductsTable={handleShowProductsTable} /> :
        <Nav handleChangeUser={handleChangeUser}
          user={user} />
      }
      {(user.role === "admin" && showUserTable) ? <UserTable user={user} /> : ""}
      {showProductsTable && <ProductsTable user={user}/>}
    </section>
  )
}