import ErrorBoundary from './ErrorBoundary'
import Providers from './Providers'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import MobileUI from './conponents/MobileUI/MobileUI'
import BottomNavbar from './components/BottomNavbar/BottomNavbar'
import './index.css'

const App = () => {
  return (
     <React.StrictMode> 
      <ErrorBoundary> 
        <Providers>
          <Header />
          <Main />
          <MobileUI />
          <BottomNavbar />
        </Providers> 
      </ErrorBoundary> 
    </React.StrictMode>
  )
}

export default App
