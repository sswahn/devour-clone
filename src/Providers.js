import { ProfileProvider } from './components/Providers/ProfileProvider'
import { ScrollProvider } from './components/Providers/ScrollProvider'
import { SearchFormProvider } from './components/Providers/SearchFormProvider'
import { CameraProvider } from './components/Providers/CameraProvider'

function Providers({ children }) {
  return (
    <ProfileProvider>
      <ScrollProvider>
        <SearchFormProvider>
          <CameraProvider>
            {children}
          </CameraProvider>
        </SearchFormProvider>
      </ScrollProvider>
    </ProfileProvider>
  )
}

export default Providers
