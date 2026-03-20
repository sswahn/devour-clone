import { useContext, useEffect, useRef  } from 'react'
import { Context } from '../../Provider'
import scroll from '../../utilities/scrollEngine'
import HomeIcon from '../Icons/HomeIcon/HomeIcon'
import SearchIcon from '../Icons/SearchIcon/SearchIcon'
import styles from './header.module.css'

const Header = () => {
  const [context, dispatch] = useContext(Context)
  
  const handleSearchbar = event => {
    dispatch({ type: 'searchbar', payload: true })
  }

  // use home icon as a logo placeholder
  
  return (
    <header className={styles.header}>
      <button type="button" aria-label="home">
        <HomeIcon />
      </button>
      <button onClick={handleSearchbar} type="button" aria-label="open search bar" aria-controls="search bar" aria-expanded={context.searchbar}>
        <SearchIcon />
      </button>
    </header>
  )
}

export default Header
