import { useContext } from 'react'
import { GetSearchContext } from '../components/Providers/SearchProvider'
import { SetSearchContext } from '../components/Providers/SearchProvider'
  
function useSearchContext() {
  const context = useContext(GetSearchContext)

  console.log('context: ', context)
  console.log('typeof context !== boolean', typeof context !== 'boolean')
  
  if (typeof context !== 'boolean') {
    throw new Error('useSearchContext: context must be used within appropriate context provider.')
  }
  return context
}

function useSetSearchContext() {
  const setContext = useContext(SetSearchContext)

  console.log('setContext: ', setContext)
  console.log('!setContext: ', !setContext)
  
  if (!setContext) {
    throw new Error('useSearchContext: setContext must be used within appropriate context provider.')
  }
  return setContext
}

export { useSearchContext, useSetSearchContext }
