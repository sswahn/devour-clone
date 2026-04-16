import { useEffect } from  'react'
import styles from './DropdownList.module.css'

function DropdownList({ isOpen, items }) {

  
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
