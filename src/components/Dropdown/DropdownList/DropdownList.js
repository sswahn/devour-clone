import { useRef, useEffect } from  'react'
import styles from './DropdownList.module.css'

function DropdownList({ id, isOpen, close, items }) {
  const listRef = useRef(null)

   // all these functions go into the listitem <button> component
  const focusPrevButton = target => {
    const button = target.parentElement.previousElementSibling.firstElementChild
    button ? button.focus() : listRef.current.lastElementChild.firstElementChild.focus()
  }

  const focusNextButton = target => {
    const button = target.parentElement.nextElementSibling.firstElementChild
    button ? button.focus() : listRef.current.firstElementChild.firstElementChild.focus()
  }

  const onKeyDown = event => {
    switch (event.key) {
      case 'Enter':
        return item.method()
        
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
    <ul 
      id={`dropdown-list-${id}`} 
      className={styles.dropdownList} 
      ref={listRef} 
      role="menu" 
      aria-labelledby={`dropdown-button-${id}`} 
      hidden={!isOpen}>
      {items?.map((item, index) => 
        <li key={index} role="none">
          <button onClick={item.method} onKeyDown={item.method} type="button" role="menuitem" tabIndex="-1">{item.text}</button>
        </li>
      )}
    </ul>
  )
}

export default DropdownList
