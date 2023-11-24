import './login.css'

export default function Login () {
  return (
    <section className='login'>
      <h1>Hola! Ingresa tu e-mail y Contraseña</h1>
      <form className='login-form'>
        <label>
          <span>E-mail</span>
          <input type='email' className='login-form-box' />
        </label>
        <label>
          <span>Contraseña</span>
          <input type='password' className='login-form-box' />
        </label>
        <button className='login-form-box'>Iniciar sesión</button>
      </form>
      <span>Crear cuenta</span>
    </section>
  )
}
