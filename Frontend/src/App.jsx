import './App.css'
import { LoginUser } from './components/LoginUser'
import { useState, useEffect } from 'react';
import { CreateUser } from './components/CreateUser';
import { WaveImageDown, WaveImageUp } from './components/icons';
import { MainPage } from './components/MainPage';
import { ListUsers } from './components/ListUsers';


function App() {

  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [user, setUser] = useState(null)
  const [role, setRole] = useState(null)


  const handleShowCreateAccount = () => {
    setShowCreateAccount(!showCreateAccount)
    setShowLogin(!showLogin)
  }

  const handleChangeUser = (newUser) => {
    if (user == null) {
      setUser(newUser)
      setRole(newUser.role)
      console.log('Inicio de sesión exitoso:', newUser);
    }
    else {
      setUser(null)
      setRole(null)
      console.log('Cierre de sesión')
    }
  }


  //TODO: Que al dar click sobre el icono de settings en la lista de usuarios, haga que aparezca el 
  //renderice un componente CreateUser dentro del componente MainPage y cambiarle al boton de 
  //crear cuenta a actualizar usuario (hacer servicio de usuario) y ademas aparezca en el componente
  //CreateUser otro boton que diga eliminar usuario
  //En lugar de usar createUser y que sirva para crear usuario y actualiar puede hacer un componente
  //nuevo y ya xD
  const [userUpdate, setUserUpdate] = useState()
  const handleUpdateOtherUser = () => {
    console.log('')
  }

  return (
    <div className='page'>
      <header className='header'>
        <WaveImageDown />
      </header>
      <div className='content'>
        <main className='main'>
          <div className='main-content'>
            {(showLogin && user == null) && <section className="sign-in">
              <LoginUser handleChangeUser={handleChangeUser} />
              <p onClick={handleShowCreateAccount}>Crear cuenta</p>
            </section>}
            {showCreateAccount && <CreateUser handleShowCreateAccount={handleShowCreateAccount} />}
            {user && <MainPage handleChangeUser={handleChangeUser} user={user} />}
          </div>
        </main>
        {/* {role == "admin" && <aside className='aside'>
          <ListUsers userLogged={{ ...user }} />
        </aside>} */}
      </div>

      <footer className='footer'>
        <WaveImageUp />
      </footer>
    </div>
  )
}

export default App
