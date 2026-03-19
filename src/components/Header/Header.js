import { useContext } from 'react'
import { Context } from '../../Provider'
import BarsIcon from '../Icons/BarsIcon/BarsIcon'
import styles from './header.module.css'

const Header = () => {
  const [context, dispatch] = useContext(Context)
  
  const handleSidebar = event => {
    dispatch({ type: 'sidebar', payload: true })
  }

  // remove sidebar button and functionality
  // replace with searchbar functionality
  // use home icon as a logo placeholder
  
  return (
    <header className={styles.header}>
      <button onClick={handleSidebar} type="button" aria-label="open menu" aria-controls="sidebar" aria-expanded={context.sidebar}>
        <BarsIcon />
        <div className="tooltip" role="tooltip">Menu</div>
      </button>
    </header>
  )
}

export default Header
