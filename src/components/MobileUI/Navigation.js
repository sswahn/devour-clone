import BottomNavbar from '../BottomNavbar/BottomNavbar'

function Navigation({ openSearch, openCamera, openNotifications, openProfile }) {
  return (
    <BottomNavbar openSearch={openSearch} />
  )
}

export default Navigation
