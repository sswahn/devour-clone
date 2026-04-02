import ErrorBoundary from './ErrorBoundary'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import MobileUI from './components/MobileUI/MobileUI'
import './index.css'

function App() {
  return (
    <React.StrictMode> 
      <ErrorBoundary> 
        <Header />
        <Main />
        <MobileUI />
      </ErrorBoundary> 
    </React.StrictMode>
  )
}

export default App
