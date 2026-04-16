import { useState } from 'react'
import EllipsisVerticalIcon from '../Icons/EllipsisVerticalIcon/EllipsisVerticalIcon'
import styles from './DropdownButton.module.css'

function DropdownButton({ id, data }) {
  const [isOpen, setIsOpen] = useState(false)
  
  const action = () => {
    setIsOpen(prevState => !prevState)
  }
  
  const onClick = event => {
    action()
  }
  
  const onKeyDown = event => {
    if (event.key === 'Enter') {
      action()
    }
  }
  
  return (
    <>
      <button 
        id={`dropdown-button-${id}`}
        className={styles.dropdownButton} 
        onClick={onClick} 
        onKeyDown={onKeyDown} 
        type="button" 
        aria-label="open dropdown" 
        aria-haspopup="menu" 
        aria-expanded={isOpen} 
        aria-controls={`dropdown-list-${id}`}>
        <EllipsisVerticalIcon />
      </button>
      <ul id={`dropdown-list-${id}`} role="menu" aria-labelledby={`dropdown-button-${id}`} hidden>
        {data?.map((item, index) => <li key={index} role="menuitem">{item}</li>}
      </ul>
    </>
  )
}

export default DropdownButton
