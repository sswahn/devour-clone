import { useContext } from 'react'
import { SetSearchContext } from '../components/Providers/SearchProvider'
  
function useSetSearchContext() {
  const setContext = useContext(SetSearchContext)
  if (!setContext) {
    throw new Error('useSetSearchContext must be used within appropriate context provider.')
  }
  return setContext
}

export default useSetSearchContext
