import { useContext } from 'react'
import { GetSessionContext } from '../Providers/SessionProvider'
import Authentication from '../../features/Authentication/Authentication'
import Interface from '../Interface/Interface'

// not keeping this file
// Interface loads at the app level
// Login button on header
// and camera has a condition, if not logged-in open login form

function AppRoot() {
  const session = useContext(GetSessionContext)
  return session.isAuthenticated ? <Interface /> : <Authentication />
}

export default AppRoot
