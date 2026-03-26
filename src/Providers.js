import BottomSheetProvider from './Providers/BottomSheetProvider'
import SearchProvider from './Providers/SearchProvider'
import CameraProvider from './Providers/CameraProvider'

function Providers({ children }) {
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

export default Providers
