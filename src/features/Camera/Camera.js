
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import ViewPort from './ViewPort'
import NavOverlay from './NavOverlay'

const Camera = () => {
 
  return (
    <div className="card" aria-label="camera">
      <ViewPort />
      <NavOverlay />
    </div>
  )
}

export default Camera
