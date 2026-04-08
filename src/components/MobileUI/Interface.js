import { Suspense, lazy } from 'react'
import { createPortal } from 'react-dom'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
const SearchForm = lazy(() => import('../SearchForm/SearchForm'))
const Camera = lazy(() => import('../../features/Camera/Camera'))
const Notifications = lazy(() => import('../Notifications/Notifications')) 
const Profile = lazy(() => import('../Profile/Profile')) 

function Interface({ 
  search, 
  camera, 
  notifications, 
  profile, 
  closeSearch, 
  closeCamera, 
  closeNotifications, 
  closeProfile 
}) {
  return createPortal(
    <div>
      <Suspense fallback={<LoadingSpinner />}>
        {search && <SearchForm closeSearch={closeSearch} />}
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        {camera && <Camera closeCamera={closeCamera} />}
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        {notifications && <Notifications notifications={notifications} closeNotifications={closeNotifications} />}
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>    
        {profile && <Profile closeProfile={closeProfile} />}
      </Suspense>
    </div>, 
    document.getElementById('portal')
  )
}

export default Interface
