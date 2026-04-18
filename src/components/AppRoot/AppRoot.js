import { useContext } from 'react'
import { GetSessionContext } from '../Providers/SessionProvider'
import Authentication from '../../features/Authentication/Authentication'
import Interface from '../Interface/Interface'

function AppRoot() {
  const session = useContext(GetSessionContext)
  return session.isAuthenticated ? <Authentication /> : <Interface />
}

export default AppRoot
