import { ProfileProvider } from './components/Providers/ProfileProvider'
import { SearchFormProvider } from './components/Providers/SearchFormProvider'
import { CameraProvider } from './components/Providers/CameraProvider'

function Providers({ children }) {
  return (
    <ProfileProvider>
      <SearchFormProvider>
        <CameraProvider>
          {children}
        </CameraProvider>
      </SearchFormProvider>
    </ProfileProvider>
  )
}

export default Providers
