import { useEffect, useState } from 'react'
import './createAccount.css'
import MessageCreateAccount from './MessageCreateAccount'
import AccountRequirements from './AccountRequirements'
export default function CreateAccount () {
  const [showCreateAccount, setShowCreateAccount] = useState(false)
  const handleShowCreateAccount = () => {
    setShowCreateAccount(!showCreateAccount)
  }

  const [showModalAssignData, setShowModalAssignData] = useState()
  const [requirementType, setShowRequirementType] = useState('')
  const [requirementValue, setRequirementValue] = useState('')
  const [requirementName, setRequirementName] = useState('')
  const addRequirement = (text, type, name) => {
    setShowModalAssignData(text)
    setShowRequirementType(type)
    setRequirementName(name)
  }

  useEffect(() => {
    console.log(requirementValue)
    if (requirementName === 'email') {
      setEmail(requirementValue)
    } else if (requirementName === 'name') {
      setName(requirementValue)
    } else if (requirementName === 'username') {
      setUsername(requirementValue)
    } else if (requirementName === 'phoneNumber') {
      setPhoneNumber(requirementValue)
    } else if (requirementName === 'password') {
      setPassword(requirementValue)
    } else {
      console.log('nada')
    }
  }, [requirementValue])

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')

  const handleCreateUser = (event) => {
    event.preventDefault()
    setShowModalAssignData()
    setRequirementName('')
    setRequirementValue('')
    setShowRequirementType('')
    console.log(showModalAssignData)
    console.log('email: ', email)
    console.log('name: ', name)
    console.log('username: ', username)
    console.log('phoneNumber: ', phoneNumber)
    console.log('password: ', password)
  }

  return (
    <section className='create-account'>
      {!showCreateAccount &&
        <MessageCreateAccount />}
      {!showCreateAccount &&
        <button className='create-account--btn' onClick={handleShowCreateAccount}>Crear cuenta</button>}
      {showCreateAccount &&
        <AccountRequirements addRequirement={addRequirement} />}
      {showCreateAccount &&
        <button className='create-account--btn'>Crear Cuenta</button>}
      {showModalAssignData &&
        <form className='modal-assign-data' onSubmit={handleCreateUser}>
          <label>
            <h1>Ingresa tu {showModalAssignData}</h1>
            <input
              type={requirementType}
              value={requirementValue}
              name={requirementName}
              onChange={({ target }) => setRequirementValue(target.value)}
            />
          </label>
          <button className='requirement-modal--btn'>Continuar</button>
        </form>}
    </section>
  )
}
