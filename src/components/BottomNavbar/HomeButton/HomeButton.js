import { useScrollContext } from '../../../hooks/useScrollContext'
import HomeIcon from '../../Icons/HomeIcon/HomeIcon'
import styles from './homebutton.module.css'

function HomeButton() {
  const scrollRef = useScrollContext()
  
  const onClick = event => {
    if (window.navigator && window.navigator.vibrate) {
      navigator.vibrate(50)
    }
    const element = scrollRef?.current
    if (element?.scrollTop !== 0) {
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
