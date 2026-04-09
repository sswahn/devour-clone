import { useEffect, Suspense, lazy } from 'react'
import { createPortal } from 'react-dom'
import { FocusTrapProvider } from '../Providers/FocusTrapProvider'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
const SearchForm = lazy(() => import('../SearchForm/SearchForm'))
const Camera = lazy(() => import('../../features/Camera/Camera'))
const Notifications = lazy(() => import('../Notifications/Notifications')) 
const Profile = lazy(() => import('../Profile/Profile')) 

function Interface({ 
  searchIsOpen, 
  cameraIsOpen, 
  notificationsIsOpen, 
  profileIsOpen, 
  closeSearch, 
  closeCamera, 
  closeNotifications, 
  closeProfile 
}) {

  const handleKeyDown = event => {
    
    console.log('in keyDown, event.target: ', event.target)
    
    if (event.key === 'Escape') {

      // how to get the correct close function? 
      
      console.log('Escape key pressed')
    }
  }
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  
  return createPortal(
    <FocusTrapProvider>
      <Suspense fallback={<LoadingSpinner />}>
        {searchIsOpen && <SearchForm closeSearch={closeSearch} />}
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        {cameraIsOpen && <Camera closeCamera={closeCamera} />}
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        {notificationsIsOpen && <Notifications closeNotifications={closeNotifications} />}
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>    
        {profileIsOpen && <Profile closeProfile={closeProfile} />}
      </Suspense>
    </FocusTrapProvider>, 
    document.getElementById('portal')
  )
}

export default Interface
