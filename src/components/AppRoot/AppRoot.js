import { useContext } from 'react'
import { GetSessionContext } from '../Providers/SessionProvider'
import Authentif

function AppRoot() {
  const session = useContext(GetSessionContext)
  
  return (
    <>
      {!session.isAuthenticated ? <Authentication /> : <>
        <Header />
        <Main />
        <MobileUI />
      <>}
    </>
  )
}

export default AppRoot
