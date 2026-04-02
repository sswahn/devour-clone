import { useContext } from 'react'
import { createPortal } from 'react-dom'
import Camera from '../../features/Camera/Camera'
import BottomSheet from '../BottomSheet/BottomSheet' // Change to Profile Component
import SearchForm from '../SearchForm/SearchForm'
import styles from './mobileui.module.css'

function Interface({ camera, closeCamera, profile, closeProfile, search, closeSearch }) {
  return createPortal(
    <section className={styles.mobileUi}>
      {camera && <Camera />}
      {profile && <BottomSheet />} {/* Change to <Profile />*/}
      {search && <SearchForm closeSearch={closeSearch} />}
    </section>, 
    document.getElementById('portal')
  )
}

export default Interface
