import { lazy } from 'react'
import { Router, Route } from '@sswahn/router'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import Feed from './components/Feed/Feed'
const Profile = lazy(() => import('./components/Profile/Profile'))
const NotFound = lazy(() => import('./components/NotFound/NotFound'))

const AppRouter = () => {
  return (
    <Router lazyFallback={LoadingSpinner}>
      <Route path="/" component={Feed} />
      <Route path="/profile/{username}" component={Profile} />
      <Route component={NotFound} /> 
    </Router>
  )
}

export default AppRouter
