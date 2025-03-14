import { lazy, Suspense } from 'react'
import ErrorBoundary from './ErrorBoundary'
import Provider from './Provider'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
const Sidebar = lazy(() => import('./components/Sidebar/Sidebar'))
import './index.css'

export default () =>
  <React.StrictMode>
    <ErrorBoundary>
      <Provider>
        <Header />
        <Main />
        <Suspense fallback={<LoadingSpinner />}>
          <Sidebar />
        </Suspense>
      </Provider> 
    </ErrorBoundary> 
  </React.StrictMode>
