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
  closeAuthentication,
  closeSearch, 
  closeCamera, 
  closeNotifications, 
  closeProfile 
}) {
  
  // Use 'Escape' key to break out of overlays:
  const closeOverlay = event => {
    if (event.key !== 'Escape') {
      return 
    }
    event.preventDefault()
    const modal = event.target.closest('[role="dialog"]')
    switch(modal?.id) {
      case 'search':
        return closeSearch()
      case 'camera':
        return closeCamera()
      case 'notifications':
        return closeNotifications()
      case 'profile':
        return closeProfile()
      default:
    }
  }
  
  useEffect(() => {
    document.addEventListener('keydown', closeOverlay)
    return () => {
      document.removeEventListener('keydown', closeOverlay)
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
