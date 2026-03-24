import HomeIcon from '../../Icons/HomeIcon/HomeIcon'
import styles from './homebutton.module.css'

function HomeButton() {

  const onClick = event => {
    // Try 50 if this is too high (last working value was 100)
    // "10-20ms may be too subtle for most users."
    if (window.navigator && window.navigator.vibrate) {
      navigator.vibrate(30) 
    }
    
    return
  }
  
  return (
    <button className={styles.homeButton} onClick={onClick} type="button" aria-label="home">
      <HomeIcon />  
    </button>
  )
}

export default HomeButton
