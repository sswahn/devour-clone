import Router from './components/Router/Router'
import Route from './components/Router/Route'
import Main from './components/Main/Main'
import Camera from './components/Camera/Camera'
import NotFound from './components/NotFound/NotFound'

const AppRouter = () => {
  return (
    <Router>
      <Route path="/devour-clone/" component={Main} />
      <Route path="/devour-clone/camera" component={Camera} />
      <Route component={NotFound} />
    </Router>
  )
}

export default AppRouter
