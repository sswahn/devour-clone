import ErrorBoundary from './ErrorBoundary'
import Provider from './Provider'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Sidebar from './components/Sidebar/Sidebar'
import './index.css'

const App = () => {
  return (
     <React.StrictMode> 
      <ErrorBoundary> 
        <Provider>
          <Header />
          <Main />
          <Sidebar />
        </Provider> 
      </ErrorBoundary> 
    </React.StrictMode>
  )
}

export default App
