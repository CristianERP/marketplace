import './LoginForm.css'
import { UserIcon, PadLockIcon } from "./icons";

export function LoginForm() {

  return (
    <form className="login-form">
      <label className="login-form__label">
        <span> <UserIcon/> </span>
        <input type="text" placeholder="Usuario"/>
      </label>
      <label className="login-form__label">
        <span> <PadLockIcon/> </span>
        <input type="password" placeholder="Password"/>
      </label>
      <button>Ingresar</button>
    </form>
  );
}
export default LoginForm;
