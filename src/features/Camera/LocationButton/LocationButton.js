import LocationIcon from '../../../components/Icons/LocationIcon/LocationIcon'
import styles from './locationbutton.module.css'

function LocationButton() {

  const handleOpenLocation = event => {
    
  }

  // onHover tool tips dont work on touch screen. consider a fix.
  
  return (
    <button className={styles.locationButton} onClick={handleOpenLocation} type="button" aria-label="select your location" aria-haspopup="dialog>
      <LocationIcon />
      <div className="tooltip" role="tooltip">Location</div>
    </button>
  )
}

export default LocationButton
