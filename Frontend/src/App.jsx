import './App.css'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
// import Sidebar from './components/sidebar/Sidebar'
import { useState } from 'react'

function App () {
  const [showInterface, setShowInterface] = useState('')
  const handleShowInterface = (interfaceOptionName) => {
    setShowInterface(interfaceOptionName)
  }
  return (
    <div className='app'>
      <Header handleShowInterface={handleShowInterface} />
      <Main showInterface={showInterface} />
      {/* <Sidebar /> */}
      <Footer />
    </div>
  )
}

export default App
