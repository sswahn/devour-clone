import { useContext } from 'react'
import { GetSearchContext } from '../components/Providers/SearchProvider'
import { SetSearchContext } from '../components/Providers/SearchProvider'
  
function useSearchContext() {
  const context = useContext(GetSearchContext)
  if (!context) {
    throw new Error('useSearchContext must be used within appropriate context provider.')
  }
  return context
}

function useSetSearchContext() {
  const setContext = useContext(SetSearchContext)
  if (!setContext) {
    throw new Error('useSearchContext must be used within appropriate context provider.')
  }
  return setContext
}

export { useSearchContext, useSetSearchContext }
