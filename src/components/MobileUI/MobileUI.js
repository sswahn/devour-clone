import { useContext } from 'react'
import { createPortal } from 'react-dom'
import { GetBottomSheetContext } from '../Providers/BottomSheetProvider'
import { GetSearchFormContext } from '../Providers/SearchFormProvider'
import { GetCameraContext } from '../Providers/CameraProvider'
import BottomSheet from '../BottomSheet/BottomSheet'
import SearchForm from '../SearchForm/SearchForm'
import Camera from '../../features/Camera/Camera'
import styles from './mobileui.module.css'

function MobileUI() { 
  const getBottomSheet = useContext(GetBottomSheetContext)
  const getSearchForm = useContext(GetSearchFormContext)
  const getCameraContext = useContext(GetCameraContext)

  return createPortal(
    <section className={styles.mobileUi}>
      {getBottomSheet && <BottomSheet />}
      {getSearchForm && <SearchForm />}
      {getCameraContext && <Camera />}
    </section>, 
    document.body
  )
}

export default MobileUI
