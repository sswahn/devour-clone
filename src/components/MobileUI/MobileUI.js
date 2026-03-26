import { useContext } from 'react'
import { createPortal } from 'react-dom'
import { BottomSheetContext } from '../Providers/BottomSheetProvider'
import { SearchFormContext } from '../Providers/SearchFormProvider'
import { CameraContext } from '../Providers/CameraProvider'
import BottomSheet from '../BottomSheet/BottomSheet'
import SearchForm from '../SearchForm/SearchForm'
import Camera from '../../features/Camera/Camera'
import styles from './mobileui.module.css'

function MobileUI() { 
  const bottomsheet = useContext(BottomSheetContext)
  const searchform = useContext(SearchFormContext)
  const camera = useContext(CameraContext)

  return createPortal(
    <section className={styles.mobileUi}>
      {bottomsheet && <BottomSheet />}
      {searchform && <SearchForm />}
      {camera && <Camera />}
    </section>, 
    document.body
  )
}

export default MobileUI
