import './App.css'
import Header from './components/header/Header'
import Main from './components/main/Main'
// import Footer from './components/footer/Footer'
// import Sidebar from './components/sidebar/Sidebar'
import { useEffect, useState } from 'react'

function App () {
  const [user, setUser] = useState(null)
  const [showInterface, setShowInterface] = useState('HomeInterface')
  const [showUserOption, setUserOption] = useState(false)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const handleShowInterface = (interfaceOptionName) => {
    setShowInterface(interfaceOptionName)
  }

  const handleShowUserOption = () => {
    setUserOption(!showUserOption)
  }

  const handleChangeUser = (newUser) => {
    if (user == null) {
      setUser(newUser)
      localStorage.setItem('user', JSON.stringify(newUser))
      console.log('Inicio de sesión exitoso:', newUser)
      handleShowInterface('HomeInterface')
    } else {
      setUser(null)
      localStorage.removeItem('user')
      console.log('Cierre de sesión')
    }
  }
  return (
    <div className='app'>
      <Header
        handleShowInterface={handleShowInterface}
        showUserOption={showUserOption}
        handleShowUserOption={handleShowUserOption}
        user={user} handleChangeUser={handleChangeUser}
      />
      <Main
        showInterface={showInterface}
        handleShowInterface={handleShowInterface}
        handleShowUserOption={handleShowUserOption}
        user={user}
        handleChangeUser={handleChangeUser}
      />
      {/* <Sidebar /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default App
