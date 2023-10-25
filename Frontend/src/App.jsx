import './App.css'
import { LoginUser } from './components/LoginUser'
import { useState } from 'react';
import { CreateUser } from './components/CreateUser';
import { WaveImageDown, WaveImageUp } from './components/icons';
import { MainPage } from './components/MainPage';
import { ListUsers } from './components/ListUsers';


function App() {

  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [user, setUser] = useState(null)

  const handleShowCreateAccount = () => {
    setShowCreateAccount(!showCreateAccount)
    setShowLogin(!showLogin)
  }

  const handleChangeUser = (newUser) => {
    if (user == null) {
      setUser(newUser)
      console.log('inicio sesion')
    }
    else {
      setUser(null)
      console.log('cerro sesion')
    }
  }



  return (
    <>
      <header>
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
            {user && <MainPage handleChangeUser={handleChangeUser} />}
          </div>
        </main>
        {user && <aside className='aside'>
          <ListUsers token={user.token}/>
        </aside>}
      </div>

      <footer>
        <WaveImageUp />
      </footer>
    </>
  )
}

export default App
