import { lazy, Suspense } from 'react'
import ErrorBoundary from './ErrorBoundary'
import Provider from './Provider'
import Header from './components/Header/Header'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
const SideBar = lazy(() => import('./components/SideBar/SideBar'))
import './index.css'

export default () =>
  <React.StrictMode>
    <ErrorBoundary>
      <Provider>
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <SideBar />
        </Suspense>
      </Provider> 
    </ErrorBoundary> 
  </React.StrictMode>
