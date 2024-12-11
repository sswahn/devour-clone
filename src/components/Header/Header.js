import { useContext } from 'react'
import { Context } from '../../Provider'
import BarsIcon from '../Icons/BarsIcon/BarsIcon'

const Header = () => {
  const [context, dispatch] = useContext(Context)
  
  const handleSidebar = event => {
    dispatch({ type: 'sidebar', payload: true })
  }

  return (
    <header className="header">
      <button className="sidebar-btn" onClick={handleSidebar} type="button" aria-label="open menu" aria-controls="sidebar" aria-expanded={context.sidebar}>
        <BarsIcon />
        <div className="tooltip" role="tooltip">Menu</div>
      </button>
    </header>
  )
}

export default Header
