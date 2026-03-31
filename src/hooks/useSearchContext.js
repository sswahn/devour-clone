import { useContext } from 'react'
import { GetSearchContext } from '../components/Providers/SearchProvider'
import { SetSearchContext } from '../components/Providers/SearchProvider'
  
function useSearchContext() {
  const context = useContext(GetSearchContext)
  if (typeof context !== 'boolean') {
    throw new Error(`Error in useSearchContext hook. context: ${context}`)
  }
  return context
}

function useSetSearchContext() {
  const setContext = useContext(SetSearchContext)
  if (!setContext) {
    throw new Error(`Error in useSetSearchContext hook. setContext: ${setContext}`)
  }
  return setContext
}

export { useSearchContext, useSetSearchContext }
