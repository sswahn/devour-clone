import HomeIcon from '../../Icons/HomeIcon/HomeIcon'
import styles from './homebutton.module.css'

function HomeButton() {

  const onClick = event => {
    if (window.scrollY !== 0) {
      window.scrollTo({
        behavior: 'smooth',
        top: 0
      })
    }
  }
  
  return (
    <button className={styles.homeButton} onClick={onClick} type="button" aria-label="home">
      <HomeIcon />  
    </button>
  )
}

export default HomeButton
