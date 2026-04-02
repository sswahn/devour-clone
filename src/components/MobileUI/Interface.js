import { useContext } from 'react'
import { createPortal } from 'react-dom'
import Camera from '../../features/Camera/Camera'
import BottomSheet from '../BottomSheet/BottomSheet' // Change to Profile Component
import SearchForm from '../SearchForm/SearchForm'
import styles from './mobileui.module.css'

function Interface({ search, camera, notifications, profile, closeSearch, closeCamera, closeNotifications, closeProfile }) {
  return createPortal(
    <section className={styles.mobileUi}>
      {search && <SearchForm closeSearch={closeSearch} />}
      {camera && <Camera />}
      {/* notifications && <Notifications closeNotifications={closeNotifications} /> */}
      {profile && <BottomSheet />} {/* Change to <Profile />*/}
    </section>, 
    document.getElementById('portal')
  )
}

export default Interface
