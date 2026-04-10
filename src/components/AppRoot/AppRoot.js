import { useContext } from 'react'
import { GetSessionContext } from '../Providers/SessionProvider'
import Authentication from '../features/Authentication'
import Header from '../Header/Header'
import Main from '../Main/Main'
import MobileUI from '../MobileUI/MobileUI'

function AppRoot() {
  const session = useContext(GetSessionContext)
  
  return (
    <>
      {!session.isAuthenticated ? <Authentication /> : <>
        <Header />
        <Main />
        <MobileUI />
      </>}
    </>
  )
}

export default AppRoot
