import { StrictMode } from 'react'
import ErrorBoundary from './ErrorBoundary'
import { SessionProvider } from './components/Providers/SessionProvider'
import AppRoot from './components/AppRoot/AppRoot'
import './index.css'

function App() {
  return (
    <StrictMode> 
      <ErrorBoundary> 
        <SessionProvider>
          <AppRoot />
        </SessionProvider>
      </ErrorBoundary> 
    </StrictMode>
  )
}

export default App
