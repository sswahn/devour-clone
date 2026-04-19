import { useState, useRef, Suspense, lazy } from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import MobileNav from '../MobileNav/MobileNav'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
const Overlays = lazy(() => import('../Overlays/Overlays'))

function Interface() {
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
  const closeAuthentication = () => {
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

  // get this function to Avatar component...
  // overlays needs it (notifications, and possibly profile)
  // Main needs it for FeedItems
  const openProfile = event => {
    // pass username to profile component: event.target.username
    setProfileIsOpen(true)
  }
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
      <Header 
        authenticationButtonRef={authenticationButtonRef}
        openAuthentication={openAuthentication}
      />
      <Main />
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
      <Suspense fallback={<LoadingSpinner />}>
        <Overlays 
          authenticationIsOpen={authenticationIsOpen}
          searchIsOpen={searchIsOpen} 
          cameraIsOpen={cameraIsOpen}
          notificationsIsOpen={notificationsIsOpen}
          profileIsOpen={profileIsOpen}
          closeAuthentication={closeAuthentication}
          closeSearch={closeSearch}
          closeCamera={closeCamera}
          closeNotifications={closeNotifications}
          closeProfile={closeProfile}
        />
      </Suspense>
    </>
  )
}

export default Interface
