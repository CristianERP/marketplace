import './Form.css'

export const MainPage = ( { handleChangeUser } ) => {
  return (
    <section>
      <h1>Felicidades, estas logeado xD</h1>
      <button onClick={handleChangeUser} className='form-button' >Cerrar sesion</button>
    </section>
  )
}