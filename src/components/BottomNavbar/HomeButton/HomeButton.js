import HomeIcon from '../../Icons/HomeIcon/HomeIcon'
import styles from './homebutton.module.css'

function HomeButton() {

  const onClick = event => {
    if (window.navigator && window.navigator.vibrate) {
      navigator.vibrate(50)
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
