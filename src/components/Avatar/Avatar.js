import { useState } from 'react'
import Identicon from '../Identicon/Identicon'
import styles from './styles.module.css'

const Avatar = ({ username, image, openProfile, size = 24 }) => {

  const action = () => {
    // openProfile(username)
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
