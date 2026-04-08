import { useState } from 'react'
import Interface from './Interface'
import Navigation from './Navigation/Navigation'

function MobileUI() {
  const [searchIsOpen, setSearchIsOpen] = useState(false)
  const [cameraIsOpen, setCameraIsOpen] = useState(false)
  const [notificationsIsOpen, setNotificationsIsOpen] = useState(false)
  const [profileIsOpen, setProfileIsOpen] = useState(false)

  // create button refs
  // in close functions add .focus() to respective refs
  // example: searchButtonRef.current.focus()

  const openSearch = event => setSearchIsOpen(true)
  const closeSearch = event => setSearchIsOpen(false)

  const openCamera = event => setCameraIsOpen(true)
  const closeCamera = event => setCameraIsOpen(false)

  const openNotifications = event => setNotificationsIsOpen(true)
  const closeNotifications = event => setNotificationsIsOpen(false)

  const openProfile = event => setProfileIsOpen(true)
  const closeProfile = event => setProfileIsOpen(false)

  return (
    <section>
      <Interface 
        searchIsOpen={searchIsOpen} 
        cameraIsOpen={cameraIsOpen}
        notificationsIsOpen={notificationsIsOpen}
        profileIsOpen={profileIsOpen}
        closeSearch={closeSearch}
        closeCamera={closeCamera}
        closeNotifications={closeNotifications}
        closeProfile={closeProfile}
      />
      <Navigation 
        openSearch={openSearch}
        openCamera={openCamera}
        openNotifications={openNotifications}
        openProfile={openProfile}
      />
    </section>
  )
}

export default MobileUI
