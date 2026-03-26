import ErrorBoundary from './ErrorBoundary'
import Providers from './Providers'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import MobileUI from './features/MobileUI/MobileUI'
import BottomNav from './components/BottomNav/BottomNav'
import './index.css'

const App = () => {
  return (
     <React.StrictMode> 
      <ErrorBoundary> 
        <Providers>
          <Header />
          <Main />
          <MobileUI />
          <BottomNav />
        </Providers> 
      </ErrorBoundary> 
    </React.StrictMode>
  )
}

export default App
