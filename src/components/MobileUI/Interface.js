import { Suspense, lazy } from 'react'
import { createPortal } from 'react-dom'
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

  // consider putting the focus trap sentinels in here
  
  return createPortal(
    <div>
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
    </div>, 
    document.getElementById('portal')
  )
}

export default Interface
