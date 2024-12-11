import { lazy } from 'react'
import { Router, Route } from '@sswahn/router'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
const NotFound = lazy(() => import('./components/NotFound/NotFound'))

const AppRouter = () => {
  return (
    <Router lazyFallback={LoadingSpinner}>
      <Route component={NotFound} /> 
    </Router>
  )
}

export default AppRouter
