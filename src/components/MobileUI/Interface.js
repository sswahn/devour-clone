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

  // Use 'Escape' key to break out of overlays:
  const handleKeyDown = event => {
    
    console.log('global key fires...')
    
    if (event.key !== 'Escape') {
      return 
    }
    
    const modal = event.target.closest('[role="dialog"]')
    switch(modal.id) {
      case 'search':
        closeSearch()
      case 'camera':
        closeCamera()
      case 'notifications':
        closeNotifications()
      case 'profile':
        closeProfile()
      default:
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
