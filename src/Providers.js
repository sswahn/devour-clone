import { ProfileProvider } from './components/Providers/ProfileProvider'
import { CameraProvider } from './components/Providers/CameraProvider'

function Providers({ children }) {
  return (
    <ProfileProvider>
      <CameraProvider>
        {children}
      </CameraProvider>
    </ProfileProvider>
  )
}

export default Providers
