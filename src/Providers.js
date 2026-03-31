import { ProfileProvider } from './components/Providers/ProfileProvider'
import { ScrollProvider } from './components/Providers/ScrollProvider'
import { SearchProvider } from './components/Providers/SearchProvider'
import { CameraProvider } from './components/Providers/CameraProvider'

function Providers({ children }) {
  return (
    <ProfileProvider>
      <ScrollProvider>
        <SearchProvider>
          <CameraProvider>
            {children}
          </CameraProvider>
        </SearchProvider>
      </ScrollProvider>
    </ProfileProvider>
  )
}

export default Providers
