import { useContext } from 'react'
import { BottomSheetContext } from './Providers/BottomSheetContext'
import { SearchFormContext } from './Providers/SearchFormContext'
import { CameraContext } from './Providers/CameraContext'
import styles from './mobileui.module.css'

function MobileUI() { 
  const bottomsheet = useContext(BottomSheetContext)
  const searchform = useContext(SearchFormContext)
  const camera = useContext(CameraContext)
  
  const bottomSheetOpen = useBottomSheet()
  const searchOpen = useSearch()
  const cameraActive = useCamera()

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
