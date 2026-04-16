import { useState, useRef, useEffect } from 'react'
import DropdownButton from './DropdownButton/DropdownButton'
import DropdownList from './DropdownList/DropdownList'
import styles from './Dropdown.module.css'

function Dropdown({ id = 0, label = 'dropdown', items }) {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef(null)

  const close = () => {
    setIsOpen(false)
  }

  return (
    <div　className={styles.dropdown}>
      <DropdownButton id={id} label={label} isOpen={isOpen} setIsOpen={setIsOpen} buttonRef={buttonRef} /> 
      <DropdownList id={id} isOpen={isOpen} close={close} items={items} buttonRef={buttonRef} />
    </div>
  )
}

export default Dropdown
