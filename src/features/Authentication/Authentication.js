import { useState } from 'react'
// import LoginUI from './LoginUI/LoginUI'
// import LoginForm from './LoginForm/LoginForm'
// import RegistrationForm from './RegistrationForm/RegistrationForm'

function Authentication() {
  const [openLogin, setOpenLogin] = useState(false)
  const [openRegistration, setOpenRegistration] = useState(false)
  
  // all primary render logic goes here
  return (
    {openLogin && <LoginForm /> }
    {openRegistration && <RegistrationForm />}
    {(!openLogin && !openRegistration) && <LoginUI />}
  )
}

export default Authentication
