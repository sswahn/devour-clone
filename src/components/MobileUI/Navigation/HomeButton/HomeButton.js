import HomeIcon from '../../../Icons/HomeIcon/HomeIcon'
import styles from './HomeButton.module.css'

function HomeButton() {
  
  const onClick = event => {
    try {
      navigator.vibrate(50)
      window.scrollTo({
        behavior: 'smooth',
        top: 0
      })
    } catch (error) {
      throw new Error(error)
    }
  }
  
  return (
    <button className={styles.homeButton} onClick={onClick} type="button" aria-label="scroll to top">
      <HomeIcon />  
    </button>
  )
}

export default HomeButton
