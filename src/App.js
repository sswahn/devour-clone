import { StrictMode } from 'react'
import ErrorBoundary from './ErrorBoundary'
import { SessionProvider } from './components/Providers/SessionProvider'
import { ProfileProvider } from './components/Providers/ProfileProvider'
import AppRoot from './components/AppRoot/AppRoot'
import './index.css'

function App() {
  return (
    <StrictMode> 
      <ErrorBoundary> 
        <SessionProvider>
          <ProfileProvider>
            <AppRoot />
          </ProfileProvider>
        </SessionProvider>
      </ErrorBoundary> 
    </StrictMode>
  )
}

export default App
