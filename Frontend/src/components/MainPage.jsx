import './Form.css'
import AdminNav from './Nav/AdminNav'
import Nav from './Nav/Nav'
import UserTable from './UserTable/UserTable'

export const MainPage = ({ handleChangeUser, user }) => {

  return (
    <section>
      {user.role === "admin" ? <AdminNav handleChangeUser={handleChangeUser} user={user} /> : <Nav handleChangeUser={handleChangeUser} user={user} />}
      {user.role === "admin" ? <UserTable user={user} /> : ""}
    </section>
  )
}