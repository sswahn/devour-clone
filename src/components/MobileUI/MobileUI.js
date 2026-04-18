import { useState, useRef } from 'react'
import Interface from './Interface'
import Navigation from './Navigation/Navigation'

function MobileUI() {
  const [authenticationIsOpen, setAuthenticationIsOpen] = useState(false)
  const [searchIsOpen, setSearchIsOpen] = useState(false)
  const [cameraIsOpen, setCameraIsOpen] = useState(false)
  const [notificationsIsOpen, setNotificationsIsOpen] = useState(false)
  const [profileIsOpen, setProfileIsOpen] = useState(false)
  const authenticationButtonRef = useRef(null)
  const searchButtonRef = useRef(null)
  const cameraButtonRef = useRef(null)
  const notificationsButtonRef = useRef(null)
  const profileButtonRef = useRef(null)

  const openAuthentication = event => setAuthenticationIsOpen(true)
  const closeAuthentication = event => {
    setAuthenticationIsOpen(false)
    authenticationButtonRef.current.focus()
  }

  const openSearch = event => setSearchIsOpen(true)
  const closeSearch = event => {
    setSearchIsOpen(false)

    console.log('return focus to searchButton.current: ', searchButtonRef.current)
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
    <>
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
        authenticationButtonRef={authenticationButtonRef}
        searchButtonRef={searchButtonRef}
        cameraButtonRef={cameraButtonRef}
        notificationsButtonRef={notificationsButtonRef}
        profileButtonRef={profileButtonRef}
        openAuthentication={openAuthentication}
        openSearch={openSearch}
        openCamera={openCamera}
        openNotifications={openNotifications}
        openProfile={openProfile}
      />
    </>
  )
}

export default MobileUI
