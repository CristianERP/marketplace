import './App.css'
import LoginForm from './components/LoginForm'
import { useState } from 'react';
import { CreateUser } from './components/CreateUser';
import { WaveImageDown, WaveImageUp } from './components/icons';
import { MainPage } from './components/MainPage';


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
    <main className='main'>
      
      <WaveImageDown/>
      <WaveImageUp/>

      <div className='main--login'>

        {(showLogin && user == null) && <section className="sign-in">
          <LoginForm handleChangeUser={handleChangeUser}/>
          <p onClick={handleShowCreateAccount}>Crear cuenta</p>
        </section>}

        { showCreateAccount && <CreateUser handleShowCreateAccount = {handleShowCreateAccount}/> }

        {user && <MainPage handleChangeUser={handleChangeUser}/>}
      </div>
    </main>
  )
}

export default App
