import { useContext } from 'react'
import GetSessionContext from '../components/Providers/SessionProvider'

export function useSession() {
  const session = useContext(GetSessionContext)

  return session
}

export default useSession
