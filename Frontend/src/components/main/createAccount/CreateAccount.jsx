import { useState } from 'react'
import './createAccount.css'
export default function CreateAccount () {
  const [showCreateAccount, setShowCreateAccount] = useState(false)
  // const [requirementSelected, setRequirementSelected] = useState()
  const handleShowCreateAccount = () => {
    setShowCreateAccount(!showCreateAccount)
  }
  return (
    <section className='create-account'>
      {!showCreateAccount &&
        <article className='message-container'>
          <div className='message-container-image'>
            <img src='/checklist.svg' alt='Informe con los datos de una persona' />
          </div>
          <h1 className='message-container--title'>Para crear tu ceunta te pediremos algunos datos</h1>
          <span className='message-container--caption'>Solo te tomará unos minutos</span>
        </article>}
      {!showCreateAccount &&
        <button className='create-account--btn' onClick={handleShowCreateAccount}>Crear cuenta</button>}

      {showCreateAccount &&
        <article className='create-account-requirements'>
          <h1>Completa los datos para crear tu cuenta</h1>
          <ul className='create-account-requirements--container'>
            <li className='requirement-card card-selected'>
              <span className='requirement-card--image-container'>Image</span>
              <div>
                <span className='requirement-card--title'>Agrega tu e-mail</span>
                <p className='requirement-card--text'>Recibirás información en tu cuenta</p>
              </div>
              <button className='requirement-card--btn'>Agregar</button>
            </li>
            <li className='requirement-card card-selected'>
              <span className='requirement-card--image-container'>Image</span>
              <div>
                <span className='requirement-card--title'>Agrega tu e-mail</span>
                <p className='requirement-card--text'>Recibirás información en tu cuenta</p>
              </div>
              <button className='requirement-card--btn'>Agregar</button>
            </li>
          </ul>
        </article>}
    </section>
  )
}
