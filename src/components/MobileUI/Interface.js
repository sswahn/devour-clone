import { Suspense, lazy } from 'react'
import { createPortal } from 'react-dom'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
const SearchForm = lazy(() => import('../SearchForm/SearchForm'))
const Camera = lazy(() => import('../../features/Camera/Camera'))
const BottomSheet = lazy(() => import('../BottomSheet/BottomSheet')) // Change to Profile Component
const styles from './mobileui.module.css'

function Interface({ search, camera, notifications, profile, closeSearch, closeCamera, closeNotifications, closeProfile }) {
  return createPortal(
    <section className={styles.mobileUi}>
      <Suspense fallback={<LoadingSpinner />}>
        {search && <SearchForm closeSearch={closeSearch} />}
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        {camera && <Camera closeCamera={closeCamera} />}
      </Suspense>
     {/* <Suspense fallback={<LoadingSpinner />}>
       notifications && <Notifications closeNotifications={closeNotifications} /> 
      </Suspense> */}
      <Suspense fallback={<LoadingSpinner />}>    
        {profile && <BottomSheet closeProfile={closeProfile} />} {/* Change to <Profile />*/}
      </Suspense>
    </section>, 
    document.getElementById('portal')
  )
}

export default Interface
