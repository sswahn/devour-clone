import ErrorBoundary from './ErrorBoundary'
import Provider from './Provider'
import Header from './components/Header/Header'
import AppRouter from './AppRouter'
import Sidebar from './components/Sidebar/Sidebar'
import './index.css'

const App = () => {
  return (
    <>
    {/*  <React.StrictMode> */}
      <ErrorBoundary>
        <Provider>
          <Header />
          <AppRouter />
          <Sidebar />
        </Provider> 
      </ErrorBoundary> 
  {/*  </React.StrictMode> */}
  </>
  )
}

export default App
