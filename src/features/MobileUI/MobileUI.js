import { useContext } from 'react'
import { BottomSheetContext } from './Providers/BottomSheetContext'
import { SearchFormContext } from './Providers/SearchFormContext'
import { CameraContext } from './Providers/CameraContext'
import BottomSheet from './components/BottomSheet/BottomSheet'
import SearchForm from './components/SearchForm/SearchForm'
import Camera from './features/Camera/Camera'
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
  )
}

export default MobileUI
