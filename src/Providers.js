import BottomSheetProvider from './components/Providers/BottomSheetProvider'
import SearchFormProvider from './components/Providers/SearchFormProvider'
import CameraProvider from './components/Providers/CameraProvider'

function Providers({ children }) {
  return (
    <BottomSheetProvider>
      <SearchFormProvider>
        <CameraProvider>
          {children}
        </CameraProvider>
      </SearchFormProvider>
    </BottomSheetProvider>
  )
}

export default Providers
