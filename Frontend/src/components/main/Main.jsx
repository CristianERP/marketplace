import './main.css'
import Login from './login/Login'
import CreateAccount from './createAccount/CreateAccount'
import Home from './home/Home'
import Notifications from './notifications/Notifications'
import Shopping from './shopping/Shopping'
import Sales from './sales/Sales'
import Products from './products/Products'
import Account from './account/Account'

const Main = ({ showInterface, handleShowInterface, user, handleChangeUser }) => {
  return (
    <main>
      {((showInterface === 'LoginInterface' && !user) && !user) &&
        <Login
          handleChangeUser={handleChangeUser}
          handleShowInterface={handleShowInterface}
        />}
      {(showInterface === 'CreateAccountInterface') &&
        <CreateAccount
          handleShowInterface={handleShowInterface}
        />}
      {(showInterface === 'HomeInterface' && user) &&
        <Home userLogged={user} />}
      {(showInterface === 'NotificationInterface') &&
        <Notifications />}
      {(showInterface === 'MyShoppingInterface') &&
        <Shopping />}
      {(showInterface === 'MySalesInterface') &&
        <Sales />}
      {(showInterface === 'MyProductsInterface') &&
        <Products userLogged={user} />}
      {(showInterface === 'MyAccountInterface') &&
        <Account />}
    </main>
  )
}

export default Main
