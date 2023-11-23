import './App.css'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import Sidebar from './components/sidebar/Sidebar'

function App () {
  return (
    <div className='app'>
      <Header />
      <Sidebar />
      <Main />
      <Footer />
      <ol>
        <li>prueba</li>
      </ol>

    </div>
  )
}

export default App
