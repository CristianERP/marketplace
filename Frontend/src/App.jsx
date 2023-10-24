import './App.css'
import LoginForm from './components/LoginForm'
import { useState } from 'react';
import { CreateUser } from './components/CreateUser';
import { WaveImageDown, WaveImageUp } from './components/icons';



function App() {

  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const handleShowCreateAccount = () => {
    setShowCreateAccount(!showCreateAccount)
    setShowLogin(!showLogin)
  }



  return (
    <main className='main'>
      
      <WaveImageDown/>
      <WaveImageUp/>

      <div className='main--content'>
        <section className="sign-in">
          {showLogin && <LoginForm />}

          <p onClick={handleShowCreateAccount}>Crear cuenta</p>
            { showCreateAccount && <CreateUser handleShowCreateAccount = {handleShowCreateAccount}/> }
        </section>
      </div>
    </main>
  )
}

export default App
