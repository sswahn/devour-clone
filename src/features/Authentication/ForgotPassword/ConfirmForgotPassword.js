import { useState } from 'react'
import EnvelopeOpenIcon from '../../../components/Icons/EnvelopeOpenIcon/EnvelopeOpenIcon'
import UserIcon from '../../../components/Icons/UserIcon/UserIcon'
import LockIcon from '../../../components/Icons/LockIcon/LockIcon'
import styles from './ForgotPassword.module.css'

function ConfirmForgotPassword() {
  const [state, setState] = useState({
    confirmation_code: '',
    username: '',
    password: '',
    confirm_password: ''
  })
  const [message, setMessage] = useState(undefined)
  const [error, setError] = useState(undefined)
  const [loading, setLoading] = useState(false)

  const handleOnChange = ({ target }) => {
    setState({ ...state, [target.id]: target.value })
  }

  const validatePassword = () => {
    return new Promise((resolve, reject) => {
      state.password !== state.confirm_password
        ? reject('Passwords do not match.')
        : resolve()
    })
  }

  const submitRequest = () => {
    const request = {
      confirmation_code: state.confirmation_code,
      username: state.username,
      password: state.password
    }
    return onSubmit(request)
  }

  const handleResponse = response => {
    return new Promise((resolve, reject) => {
      if (!response) {
        reject(response)
      }
      if (response.error !== undefined) { 
        reject(response.error) 
      }
      resolve(response.message)
    })
  }

  const displayMessage = message => {
    if (message) {
      setMessage(message)
    }
  }
  
  const onSubmit = async event => {
    event.preventDefault()
    try {
      await validatePassword()
      setLoading(true) 
      setError(undefined)
      const response = await submitRequest()
      setLoading(false)
      const data = await handleResponse(response)
      displayMessage(data)
    } catch (err) {
      setError(err)
    }
  }

  // patterns need titles
  
  return (
    <form className={styles.confirmForgotPassword} onSubmit={onSubmit} aria-label="create new password">
      <h2>Create a new password</h2>
      <div>
        <input id="confirmation_code" type="text" onChange={handleOnChange} placeholder="Confirmation code." required minLength={1} maxLength={255} autoComplete="off" aria-label="confirmation code" />
        <EnvelopeOpenIcon />
      </div>
      <div>
        <input id="username" type="text" onChange={handleOnChange} placeholder="Username" required minLength={2} maxLength={50} pattern="^(?!_)[a-zA-Z0-9_]{1,48}(?<!_)$" autoComplete="off" aria-label="username" />
        <UserIcon />
      </div>
      <div>
        <input id="password" type="password" onChange={handleOnChange} placeholder="Password" required minLength={8} maxLength={130} pattern="^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z]).{8,}$" autoComplete="off" aria-label="password" />
        <LockIcon />
      </div>
      <div>
        <input id="confirm_password" type="password" onChange={handleOnChange} required minLength={8} maxLength={130} placeholder="Confirm Password" autoComplete="off" aria-label="confirm password" />
        <LockIcon />
      </div>
      <button type="submit" aria-label="confirm reset password">Confirm Reset Password</button>}
    </form>
  )
}

export default ConfirmForgotPassword
