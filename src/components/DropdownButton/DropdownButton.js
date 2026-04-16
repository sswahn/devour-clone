import { useState, useRef } from 'react'
import EllipsisVerticalIcon from '../Icons/EllipsisVerticalIcon/EllipsisVerticalIcon'
import styles from './DropdownButton.module.css'

function DropdownButton({ id = 0, label = 'dropdown', items }) {
  const [isOpen, setIsOpen] = useState(false)
  const listRef = useRef(null)
  
  const action = () => {
    setIsOpen(prevState => !prevState)
    listRef.current.children[0].focus() 
  }
  
  const onClick = event => {
    action()
  }
  
  const onKeyDown = event => {
    if (event.key === 'Enter') {
      action()
    }
  }

  // break list item button into its own component
  // same with main button, 
  // same with <ul> itself.
  // combine in <Dropdown /> component
  
  return (
    <>
      <button 
        id={`dropdown-button-${id}`}
        className={styles.dropdownButton} 
        onClick={onClick} 
        onKeyDown={onKeyDown} 
        type="button" 
        aria-label={label} 
        aria-haspopup="menu" 
        aria-expanded={isOpen} 
        aria-controls={`dropdown-list-${id}`}>
        <EllipsisVerticalIcon />
      </button>
      <ul id={`dropdown-list-${id}`} ref={listRef} role="menu" aria-labelledby={`dropdown-button-${id}`} hidden={!isOpen}>
        {items?.map((item, index) => <li key={index} role="menuitem">
          <button onClick={item.action} onKeyDown={item.action} type="button">{item.text}</button>
        </li>}
      </ul>
    </>
  )
}

export default DropdownButton
