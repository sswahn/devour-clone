import { useContext } from 'react'
import { createPortal } from 'react-dom'
import { GetCameraContext } from '../Providers/CameraProvider'
import { GetProfileContext } from '../Providers/ProfileProvider'
import { GetSearchFormContext } from '../Providers/SearchFormProvider'
import Camera from '../../features/Camera/Camera'
import BottomSheet from '../BottomSheet/BottomSheet' // Change to Profile Component
import SearchForm from '../SearchForm/SearchForm'
import styles from './mobileui.module.css'

function MobileUI() { 
  const getCameraContext = useContext(GetCameraContext)
  const getProfileContext = useContext(GetProfileContext)
  const getSearchFormContext = useContext(GetSearchFormContext)
  
  return createPortal(
    <section className={styles.mobileUi}>
      {getCameraContext && <Camera />}
      {getProfileContext && <BottomSheet />} {/* Change to <Profile />*/}
      {getSearchFormContext && <SearchForm />}
    </section>, 
    document.body
  )
}

export default MobileUI
