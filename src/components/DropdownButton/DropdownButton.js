import { useState, useRef, useEffect } from 'react'
import EllipsisVerticalIcon from '../Icons/EllipsisVerticalIcon/EllipsisVerticalIcon'
import styles from './Dropdown.module.css'

function Dropdown({ id = 0, label = 'dropdown', items }) {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef(null)
  const listRef = useRef(null)
  
  const action = () => {
    setIsOpen(prevState => !prevState)
  }
  
  const onClick = event => {
    action()
  }
  
  const onKeyDown = event => {
    const menuItems = Array.from(listRef.current?.children || [])
    const currentIndex = menuItems.indexOf(document.activeElement)

    switch (event.key) {
      case 'Enter':
        return action()
        
      case 'ArrowDown':
        event.preventDefault() // test with and without this (supposedly it keeps the screen from scrolling)
        // Move to next item or loop to start
        const nextIndex = (currentIndex + 1) % menuItems.length
        menuItems[nextIndex]?.firstElementChild.focus()
        return

      case 'ArrowUp':
        event.preventDefault() // test with and without this (supposedly it keeps the screen from scrolling)
        // Move to previous item or loop to end
        const prevIndex = (currentIndex - 1 + menuItems.length) % menuItems.length
        menuItems[prevIndex]?.focus()
        return

      case 'Escape':
        action()
        buttonRef.current?.focus() // 2. Return focus to button on close
        return

      case 'Tab':
        return action()  // Standard behavior: Close menu if user tabs out

      default:
        return
    }
  }

  useEffect(() => {
    if (isOpen) {
      listRef.current?.children[0]?.firstElementChild.focus() 
    }
  }, [isOpen])

  // break list item button into its own component
  // same with main button, 
  // same with <ul> itself.
  // combine in <Dropdown /> component
  
  return (
    <>
      <button 
        id={`dropdown-button-${id}`}
        className={styles.dropdown}
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
      <ul id={`dropdown-list-${id}`} ref={listRef} role="menu" aria-labelledby={`dropdown-button-${id}`} hidden={!isOpen}>
        {items?.map((item, index) => <li key={index}>
          <button onClick={item.action} onKeyDown={item.action} type="button" role="menuitem" tabIndex="-1">{item.text}</button>
        </li>}
      </ul>
    </>
  )
}

export default Dropdown
