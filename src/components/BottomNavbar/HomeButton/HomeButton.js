import scroll from '../../../utilities/scrollEngine'
import HomeIcon from '../../Icons/HomeIcon/HomeIcon'
import styles from './homebutton.module.css'

function HomeButton() {

  const onClick = event => {
    if (window.navigator && window.navigator.vibrate) {
      navigator.vibrate(50)
    }
    const element = scroll.getElement()
    if (!element) {
      return console.warn('scroll element is null.')
    }
    if (element.scrollTop !== 0) {
      element.scrollTo({
        behavior: 'smooth',
        top: 0
      })
    }
  }
  
  return (
    <button className={styles.homeButton} onClick={onClick} type="button" aria-label="scroll to top">
      <HomeIcon />  
    </button>
  )
}

export default HomeButton
