import { useState, useRef } from 'react'
import Interface from './Interface'
import Navigation from './Navigation/Navigation'

function MobileUI() {
  const [searchIsOpen, setSearchIsOpen] = useState(false)
  const [cameraIsOpen, setCameraIsOpen] = useState(false)
  const [notificationsIsOpen, setNotificationsIsOpen] = useState(false)
  const [profileIsOpen, setProfileIsOpen] = useState(false)
  const searchButtonRef = useRef(null)
  const cameraButtonRef = useRef(null)
  const notificationsButtonRef = useRef(null)
  const profileButtonRef = useRef(null)

  const openSearch = event => setSearchIsOpen(true)
  const closeSearch = event => {
    setSearchIsOpen(false)
    searchButtonRef.current.focus() // test this with a delay, setTimeout, currently everything focuses on profile button
  }

  const openCamera = event => setCameraIsOpen(true)
  const closeCamera = event => {
    setCameraIsOpen(false)
    cameraButtonRef.current.focus()
  }

  const openNotifications = event => setNotificationsIsOpen(true)
  const closeNotifications = event => {
    setNotificationsIsOpen(false)
    notificationsButtonRef.current.focus()
  }

  const openProfile = event => setProfileIsOpen(true)
  const closeProfile = event => {
    setProfileIsOpen(false)
    profileButtonRef.current.focus()
  }

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
        searchButtonRef={searchButtonRef}
        cameraButtonRef={cameraButtonRef}
        notificationsButtonRef={notificationsButtonRef}
        profileButtonRef={profileButtonRef}
        openSearch={openSearch}
        openCamera={openCamera}
        openNotifications={openNotifications}
        openProfile={openProfile}
      />
    </section>
  )
}

export default MobileUI
