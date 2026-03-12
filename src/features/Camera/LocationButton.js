

function LocationButton() {


  return (
    <button className="icon-btn" onClick={openSubmit} type="button" aria-label="add your location" aria-haspopup="dialog>
      <LocationIcon />
      <div className="tooltip" role="tooltip">Location</div>
    </button>
  )
}

export default LocationButton
