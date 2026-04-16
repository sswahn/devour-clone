import { useRef, useEffect } from  'react'
import ListItemButton from './ListItemButton/ListItemButton'
import styles from './DropdownList.module.css'

function DropdownList({ id, isOpen, close, items, buttonRef }) {
  const listRef = useRef(null)

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
          <ListItemButton buttonRef={buttonRef} listRef={listRef} text={item.text} method={item.method} close={close} />
        </li>
      )}
    </ul>
  )
}

export default DropdownList
