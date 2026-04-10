import { useState } from 'react'
import AuthUI from './AuthUI/AuthUI'
// import LoginForm from './LoginForm/LoginForm'
// import RegistrationForm from './RegistrationForm/RegistrationForm'

function Authentication() {
  const [openLogin, setOpenLogin] = useState(false)
  const [openRegistration, setOpenRegistration] = useState(false)
  
  // all primary render logic goes here
  return (
    {(!openLogin && !openRegistration) && <AuthUI />}
  )
}

export default Authentication
