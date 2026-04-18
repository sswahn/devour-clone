import { useContext } from 'react'
import { GetSessionContext } from '../Providers/SessionProvider'
import Authentication from '../../features/Authentication/Authentication'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Interface from '../Interface/Interface'

function AppRoot() {
  const session = useContext(GetSessionContext)
  
  return (
    <>
      {session.isAuthenticated ? <Authentication /> : <>
        <Header />
        <Main />
        <Interface />
      </>}
    </>
  )
}

export default AppRoot
