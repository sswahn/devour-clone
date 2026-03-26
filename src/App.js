import ErrorBoundary from './ErrorBoundary'
import Providers from './Providers'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import './index.css'

const App = () => {
  return (
     <React.StrictMode> 
      <ErrorBoundary> 
        <Providers>
          <Header />
          <Main />
        </Providers> 
      </ErrorBoundary> 
    </React.StrictMode>
  )
}

export default App
