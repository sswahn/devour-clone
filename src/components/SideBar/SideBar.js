import { useContext, useState } from 'react'
import { Context } from '../../Provider'
import { config } from '../../config'
import { Search, Sidebar } from '@sswahn/components'
import Avatar from '../Avatar/Avatar'
import { navigateTo } from '@sswahn/router'
import server from '@sswahn/server'
import storage from '@sswahn/storage'
import database from '@sswahn/database'
import Camera from '../Camera/Camera'
import BarsIcon from '../Icons/BarsIcon/BarsIcon'
import SearchIcon from '../Icons/SearchIcon/SearchIcon'
import CameraIcon from '../Icons/CameraIcon/CameraIcon'
import BellIcon from '../Icons/BellIcon/BellIcon'
import UserPlusIcon from '../Icons/UserPlusIcon/UserPlusIcon'
import RightFromBracketIcon from '../Icons/RightFromBracketIcon/RightFromBracketIcon'
import RightToBracketIcon from '../Icons/RightToBracketIcon/RightToBracketIcon'

const SideBar = () => {
  const [context, dispatch] = useContext(Context)
  const db = database()
  
  const handleSidebar = event => {
    dispatch({ type: 'sidebar', payload: false })
  }
  
  const handleSearch = value => {
    // filter through data for items related to value
  }
  
  const handleCloseSidebar = () => {
    dispatch({ type: 'sidebar', payload: false })
  }
  
  const handleOpenProfile = () => {
    navigateTo(`/profile/${context.user.username || 'sswahn'}`)
  }
  
  const handleOpenCamera = event => {
    dispatch({ type: 'sidebar', payload: false })
    dispatch({ type: 'modal', payload: { isOpen: true, content: <Camera /> } })
  }
  
  const handleNotifications = event => {
    
  }
  
  const handleSignout = async () => {
    try {
      const request = {
        session: false
      }
      server.post(config.api.user.logout, request)
      dispatch({ type: 'session', payload: false })
      db.destroy()
      storage.local.remove(config.store.posts.create)
    } catch (error) {
      console.error('Network error, check connection.') // use errorHandler
    }
  }

  const handleSignin = event => {
    dispatch({ type: 'auth', payload: 'login' })
    dispatch({ type: 'sidebar', payload: false })
  }
  
  const handleSignup = event => {
    dispatch({ type: 'auth', payload: 'register' })
    dispatch({ type: 'sidebar', payload: false })
  }
  
  return (
    <Sidebar className="sidebar" open={context.sidebar} onClose={handleCloseSidebar}>
      <nav>
        <div className="sidebar-header">
          <button className="sidebar-btn search-btn" type="button" aria-label="open search">
            <SearchIcon />
            <div className="tooltip" role="tooltip">Search</div>
          </button>
    
          {/* <Search className="search" placeholder="Search" onChange={handleSearch} /> */}
    
          <button className="sidebar-btn" onClick={handleSidebar} type="button" aria-label="open menu" aria-controls="sidebar" aria-expanded={context.sidebar}>
            <BarsIcon />
            <div className="tooltip" role="tooltip">Menu</div>
          </button>
        </div>
        {!context.session ? (
          <div className="sidebar-btn-container">
            <button className="navigation" onClick={handleOpenProfile} type="button" aria-label="open profile">
              <Avatar className="sidebar-avatar" image={context.user.avatar} username={context.user.username || 'sswahn'} onClick={() => {}} size="18px" />
              <span className="sidebar-user">{context.user.username || 'sswahn'}</span>
            </button>
            <button className="navigation" onClick={handleOpenCamera} type="button" aria-label="open camera" aria-haspopup="dialog">
              <CameraIcon />
              <span>Camera</span>
            </button>
            <button className="navigation" onClick={handleNotifications} type="button" aria-label="open notifications" aria-haspopup="dialog"> 
              <BellIcon />
              <div className="notifications-badge" role="status" aria-label="notification indicator" aria-hidden="false"></div>
              <span>Notifications</span>
            </button>
            <button className="navigation" onClick={handleSignout} type="button" aria-label="sign out" aria-description="Click here to end your session.">
              <RightFromBracketIcon />
              <span>Sign Out</span>
            </button>
          </div>
        ) : (
          <div className="sidebar-btn-container">
            <button className="navigation" onClick={handleSignin} type="button" aria-label="sign out" aria-description="Click here to sign in with your username and password." aria-haspopup="dialog">
              <RightToBracketIcon />
              <span>Sign In</span>
            </button>
            <button className="navigation" onClick={handleSignup} type="button" aria-label="sign up" aria-description="Register a user account." aria-haspopup="dialog">
              <UserPlusIcon />
              <span>Sign Up</span>
            </button>
          </div>
        )}
      </nav>
    </Sidebar>
  )
}

export default SideBar
