import Router from './components/Router/Router'
import Route from './components/Router/Route'
import Main from './components/Main/Main'
import NotFound from './components/NotFound/NotFound'

const AppRouter = () => {
  return (
    <Router>
      <Route path="/devour-clone/" component={Main} />
      <Route component={NotFound} />
    </Router>
  )
}

export default AppRouter
