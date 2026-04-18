import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { FocusTrapProvider } from '../Providers/FocusTrapProvider'
import SearchForm from '../SearchForm/SearchForm'
import Camera from '../../features/Camera/Camera'
import Notifications from '../Notifications/Notifications'
import Profile from '../Profile/Profile'

function Overlays({ 
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
      {searchIsOpen && <SearchForm closeSearch={closeSearch} />}
      {cameraIsOpen && <Camera closeCamera={closeCamera} />}
      {notificationsIsOpen && <Notifications closeNotifications={closeNotifications} />}
      {profileIsOpen && <Profile closeProfile={closeProfile} />}
    </FocusTrapProvider>, 
    document.getElementById('portal')
  )
}

export default Overlays
