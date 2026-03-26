import { useContext } from 'react'
import { BottomSheetContext } from './Providers/BottomSheetContext'

import styles from './mobileui.module.css'

function MobileUI() { 
  const [{bottomsheet}] = useContext(BottomSheetContext)
  const [context] = useContext(SearchFormContext)
  const [context] = useContext(CameraContext)
  
  const bottomSheetOpen = useBottomSheet()
  const searchOpen = useSearch()
  const cameraActive = useCamera()

  return createPortal(
      <section className={styles.mobileUi}>
        {bottomsheet && <BottomSheet />}
        {searchOpen && <SearchForm />}
        {cameraActive && <Camera />}
      </section>, 
      document.body
    )
  )
}

export default MobileUI
