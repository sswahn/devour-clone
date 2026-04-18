import { useState, useRef } from 'react'
import Overlays from '../Overlays/Overlays'
import MobileNav from '../MobileNav/MobileNav'

function Interface() {
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

  // change this component name to something global/universal
  // conditionally render the navigation, either with css or js

  // Interface will contain all overlays, whether header or footer
  // this component should probably contain the app
  // this is appRoot.
  // header, main, mobilNav go in here

  return (
    <>
      <Overlays 
        searchIsOpen={searchIsOpen} 
        cameraIsOpen={cameraIsOpen}
        notificationsIsOpen={notificationsIsOpen}
        profileIsOpen={profileIsOpen}
        closeSearch={closeSearch}
        closeCamera={closeCamera}
        closeNotifications={closeNotifications}
        closeProfile={closeProfile}
      />
      <MobileNav 
        searchButtonRef={searchButtonRef}
        cameraButtonRef={cameraButtonRef}
        notificationsButtonRef={notificationsButtonRef}
        profileButtonRef={profileButtonRef}
        openSearch={openSearch}
        openCamera={openCamera}
        openNotifications={openNotifications}
        openProfile={openProfile}
      />
    </>
  )
}

export default Interface
