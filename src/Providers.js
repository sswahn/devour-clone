import { ProfileProvider } from './components/Providers/ProfileProvider'
import { SearchProvider } from './components/Providers/SearchProvider'
import { CameraProvider } from './components/Providers/CameraProvider'

function Providers({ children }) {
  return (
    <ProfileProvider>
        <SearchProvider>
          <CameraProvider>
            {children}
          </CameraProvider>
        </SearchProvider>
    </ProfileProvider>
  )
}

export default Providers
