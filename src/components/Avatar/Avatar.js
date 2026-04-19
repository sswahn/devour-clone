import { useState } from 'react'
import Identicon from '../Identicon/Identicon'
import styles from './styles.module.css'

const Avatar = ({ username, image, size = 24 }) => {

  const onClick = event => {
    // open usernames profile
  }
  
  return (
    <div className={styles.avatar} onClick={onClick} aria-label={`${username}'s avatar`}>
      {image 
        ? <img src={image} alt={`${username}'s avatar`} loading="lazy" width={size} height={size} />
        : <Identicon size={size} />
      }
    </div>
  )
}

export default Avatar
