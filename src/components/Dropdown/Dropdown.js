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
    if (event.key === 'Enter') {
      action()
    }
  }

  const focusPrevButton = target => {
    const button = target.parentElement.previousElementSibling.firstElementChild
    button ? button.focus() : listRef.current.lastElementChild.firstElementChild.focus()
  }

  const focusNextButton = target => {
    const button = target.parentElement.nextElementSibling.firstElementChild
    button ? button.focus() : listRef.current.firstElementChild.firstElementChild.focus()
  }

  // move this to the ul component
  const onKeyDownForListButtons = event => {
    switch (event.key) {
      case 'Enter':
        return action()
        
      case 'ArrowDown':
        event.preventDefault() // test with and without this (supposedly it keeps the screen from scrolling)
        return focusNextButton(event.target)

      case 'ArrowUp':
        event.preventDefault() // test with and without this (supposedly it keeps the screen from scrolling)
        return focusPrevButton(event.target)

      case 'Escape':
        close()
        buttonRef.current?.focus() // 2. Return focus to button on close
        return

      case 'Tab':
        return close()  // Standard behavior: Close menu if user tabs out

      default:
        return
    }
  }

  useEffect(() => {
    if (isOpen) {
      listRef.current.firstElementChild.firstElementChild.focus()
    }
  }, [isOpen])

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
      <ul id={`dropdown-list-${id}`} ref={listRef} role="menu" aria-labelledby={`dropdown-button-${id}`} hidden={!isOpen}>
        {items?.map((item, index) => 
          <li key={index} role="none">
            <button onClick={item.method} onKeyDown={item.method} type="button" role="menuitem" tabIndex="-1">{item.text}</button>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Dropdown
