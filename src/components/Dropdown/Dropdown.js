import { useState, useRef, useEffect } from 'react'
import EllipsisVerticalIcon from '../Icons/EllipsisVerticalIcon/EllipsisVerticalIcon'
import styles from './Dropdown.module.css'

function Dropdown({ id = 0, label = 'dropdown', items }) {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef(null)

  const close = () => {
    setIsOpen(false)
  }

  return (
    <div　className={styles.dropdown}>
      <button 
        id={`dropdown-button-${id}`}
        ref={buttonRef}
        onClick={onClick} 
        onKeyDown={onKeyDown} 
        type="button" 
        aria-label={label} 
        aria-haspopup="menu" 
        aria-expanded={isOpen} 
        aria-controls={`dropdown-list-${id}`}>
        <EllipsisVerticalIcon />
      </button>
      <DropdownButton id={id} label={label} isOpen={isOpen} setIsOpen={setIsOpen} buttonRef={buttonRef} /> 
      <DropdownList id={id} isOpen={isOpen} close={close} items={items} />
    </div>
  )
}

export default Dropdown
