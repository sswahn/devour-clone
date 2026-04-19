import { useState } from 'react'
import useProfile from '../../hooks/useProfile'
import Identicon from '../Identicon/Identicon'
import styles from './styles.module.css'

const Avatar = ({ username, image, openProfile, size = 24 }) => {
  const { setProfile } = useProfile()
  
  const action = () => {
    setProfile(username)
  }
  
  const onClick = event => {
    action()
  }

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      action()
    }
  }
  
  return (
    <div className={styles.avatar} onClick={onClick} onKeyDown={onKeyDown} aria-label={`${username}'s avatar`}>
      {image 
        ? <img src={image} alt={`${username}'s avatar`} loading="lazy" width={size} height={size} />
        : <Identicon seed={username} />
      }
    </div>
  )
}

export default Avatar
