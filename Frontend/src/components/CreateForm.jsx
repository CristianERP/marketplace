import './CreateForm.css'

export const CreateForm = ( { handleShowCreateAccount }) => {

    return(

      <div className='create-account-form'>
        <form action="" >
          <label className="form-label">
            <span className="form-span">Nombre</span>
            <input className="form-input" type="text" />
          </label>
          <label className="form-label">
            <span className="form-span">Nombre de usuario</span>
            <input className="form-input" type="text" />
          </label>
          <label className="form-label">
            <span className="form-span">Contraseña</span>
            <input className="form-input" type="password" />
          </label>
          <label className="form-label">
            <span className="form-span">Fecha de nacimiento</span>
            <input className="form-input" type="date" />
          </label>
          <label className="form-label">
            <span className="form-span">Teléfono</span>
            <input className="form-input" type="tel" />
          </label>
          <label className="form-label">
            <span className="form-span">Email</span>
            <input className="form-input" type="email" />
          </label>
          <button>Crear cuenta</button>
        </form>
          <button onClick={handleShowCreateAccount}>Cerrar</button>
      </div>
    )
}