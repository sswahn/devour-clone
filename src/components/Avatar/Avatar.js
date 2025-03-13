import { useState } from 'react'
import UserIcon from './UserIcon.js'
import styles from './styles.module.css'

const Avatar = ({ className, image, username, onClick, size }) => {
  return (
    <div className={`${styles.avatar} ${className || ''}`} onClick={onClick} aria-label={`${username}'s avatar`}>
      {image 
        ? <img src={image} alt={`${username}'s avatar`} width={size || '40px'} height={size || '40px'} />
        : <UserIcon size={size} />
      }
    </div>
  )
}

export default Avatar
