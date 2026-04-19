import { useState, useRef, useEffect, Suspense, lazy } from 'react'
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
  
  // if button opens overlay, storeFocus.current = button.current
  // if button closes overlay restore focus, storedFocus.current.focus()
  const storeFocus = useRef(null) 
  
  const openAuthentication = () => setAuthenticationIsOpen(true)
  const closeAuthentication = () => {
    setAuthenticationIsOpen(false)
    authenticationButtonRef.current.focus()
  }
  
  const openSearch = () => setSearchIsOpen(true)
  const closeSearch = () => {
    setSearchIsOpen(false)

    console.log('return focus to searchButton.current: ', searchButtonRef.current)
    searchButtonRef.current.focus() // test this with a delay, setTimeout, currently everything focuses on profile button
  }

  const openCamera = () => setCameraIsOpen(true)
  const closeCamera = () => {
    setCameraIsOpen(false)
    cameraButtonRef.current.focus()
  }

  const openNotifications = () => setNotificationsIsOpen(true)
  const closeNotifications = () => {
    setNotificationsIsOpen(false)
    notificationsButtonRef.current.focus()
  }

  // open profile will fire in context username update
  // using useEffect, with openProfile()
  const openProfile = () => { 
    setProfileIsOpen(true)
  }
  const closeProfile = () => {
    setProfileIsOpen(false)
    
    // return focus to source, which could be closed.
    // could be avatar, could be profileButton, need a reliable source
    // the focus 'rule' is: whatever the last main interace button was clicked
    // return to that button.
    // so if Notifications button opens notifications ->
    // avatar in notifications opens profile ->
    // profile closes to main interface ->
    // notifications button should regain focus...

    // implementation: FocusProvider - LIFO (last in first out)
    // every overlay opening push the element to the stack.
    // every close overlay pop from the stack until that element is revealed.
    
    profileButtonRef.current.focus() 
  }

  useEffect(() => {
    if (username) {
      openProfile()
    }
  }, [username])

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
        //openProfile={openProfile}
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
