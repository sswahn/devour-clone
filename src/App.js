import ErrorBoundary from './ErrorBoundary'
import Provider from './Provider'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import './index.css'

const App = () => {
  return (
     <React.StrictMode> 
      <ErrorBoundary> 
        <Provider>
          <Header />
          <Main />
        </Provider> 
      </ErrorBoundary> 
    </React.StrictMode>
  )
}

export default App
