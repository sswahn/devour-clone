import { useState } from 'react'
import Interface from './Interface'
import Navigation from './Navigation'

function MobileUI() {
  const [search, setSearch] = useState(false)
  const [camera, setCamera] = useState(false)
  const [notifications, setNotifications] = useState(false)
  const [profile, setProfile] = useState(false)

  const openSearch = event => setSearch(true)
  const closeSearch = event => setSearch(false)

  const openCamera = event => setCamera(true)
  const closeCamera = event => setCamera(false)

  const openNotifications = event => setNotifications(true)
  const closeNotifications = event => setNotifications(false)

  const openProfile = event => setProfile(true)
  const closeProfile = event => setProfile(false)

  return (
    <section>
      <Interface 
        search={search} 
        camera={camera}
        notifications={notifications}
        profile={profile}
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
