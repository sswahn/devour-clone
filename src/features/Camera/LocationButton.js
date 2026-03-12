import LocationIcon from '../Icons/LocationIcon/LocationIcon'

function LocationButton() {

  const handleOpenLocation = event => {
    
  }

  // onHover tool tips dont work on touch screen. consider a fix.
  
  return (
    <button className="icon-btn" onClick={handleOpenLocation} type="button" aria-label="add your location" aria-haspopup="dialog>
      <LocationIcon />
      <div className="tooltip" role="tooltip">Location</div>
    </button>
  )
}

export default LocationButton
