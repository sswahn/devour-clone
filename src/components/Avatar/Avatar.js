import { useState } from 'react'
import UserIcon from '../Icons/UserIcon/UserIcon'
import styles from './styles.module.css'

const Avatar = ({ className, image, username, onClick, size }) => {
  // should onClick be a prop or defined here?
  return (
    <div className={`${styles.avatar} ${className || ''}`} onClick={onClick} aria-label={`${username}'s avatar`}>
      {image 
        ? <img src={image} alt={`${username}'s avatar`} loading="lazy" width={size || '24px'} height={size || '24px'} />
        : <UserIcon size={size} />
      }
    </div>
  )
}

export default Avatar
