import ErrorBoundary from './ErrorBoundary'
import SessionProvider from './components/Provider/SessionProvider'
import AppRoot from './components/AppRoot/AppRoot'
import './index.css'

function App() {
  return (
    <React.StrictMode> 
      <ErrorBoundary> 
        <SessionProvider>
          <AppRoot />
        </SessionProvider>
      </ErrorBoundary> 
    </React.StrictMode>
  )
}

export default App
