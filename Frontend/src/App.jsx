import './App.css'
import LoginForm from './components/LoginForm'
import { useState } from 'react';
import { CreateForm } from './components/CreateForm';
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
            { showCreateAccount && <CreateForm handleShowCreateAccount = {handleShowCreateAccount}/> }
        </section>
      </div>
    </main>
  )
}

export default App
