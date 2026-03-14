import { useContext } from 'react'
import { Context } from '../../Provider'
import styles from './drawer.module.css'

function Drawer() {
  const [context, dispatch] = useContext(Context)

  const handleOpenProfile = event => {
    
  }

  const handleOpenCamera = event => {
    
  }

  const handleShowNotifications = event => {
    
  }

  const handleLogout = event => {
    
  }
  
  return (
    <nav className={styles.drawer}>
      <button type="button" onClick={handleOpenProfile}>Profile<button>
      <button type="button" onClick={handleOpenCamera}>Camera<button>
      <button type="button" onClick={handleShowNotifications}>Notifications<button>
      <button type="button" onClick={handleLogout}>Logout<button>
    </nav>
  )
}

export default Drawer
