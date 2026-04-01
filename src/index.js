//import * as serviceWorker from './serviceWorker'
import { createRoot } from 'react-dom/client'
import App from './App'
import logError from "./utilities/logError"

// Global error listeners
window.addEventListener('error', event => logError(event.error))
window.addEventListener('unhandledrejection', event => logError(event.reason))

createRoot(document.getElementById('root')).render(<App />)

//serviceWorker.register()
