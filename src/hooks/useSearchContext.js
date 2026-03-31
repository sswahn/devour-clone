import { useContext } from 'react'
import { GetSearchContext } from '../components/Providers/SearchProvider'
import { SetSearchContext } from '../components/Providers/SearchProvider'
  
function useGetSearchContext() {
  const context = useContext(GetSearchContext)
  if (!context) {
    throw new Error('useGetSearchContext must be used within appropriate context provider.')
  }
  return context
}

export default useGetSearchContext
