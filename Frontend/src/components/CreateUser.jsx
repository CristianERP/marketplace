import './Form.css'
import { Field } from './field'


export const CreateUser = ( { handleShowCreateAccount }) => {

    return(

      <div className='create-account-form'>
        <form action="" >
          <Field spanChildren={'Nombre'} inputType={'text'}/>
          <Field spanChildren={'Nickname'} inputType={'text'}/>
          <Field spanChildren={'Contraseña'} inputType={'password'}/>
          <Field spanChildren={'Teléfono'} inputType={'tel'}/>
          <Field spanChildren={'Email'} inputType={'email'}/>
          <button className='form-button'>Crear cuenta</button>
        </form>
        <button onClick={handleShowCreateAccount} className='form-button'>Cerrar</button>
      </div>
    )
}