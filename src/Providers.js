import BottomSheetProvider from './Providers/BottomSheetProvider'
import SearchProvider from './Providers/SearchProvider'
import CameraProvider from './Providers/CameraProvider'

function Provider({ children }) {
  return (
    <BottomSheetProvider>
      <SearchProvider>
        <CameraProvider>
          {childern}
        </CameraProvider>
      </SearchProvider>
    </BottomSheetProvider>
  )
}

export default Provider
