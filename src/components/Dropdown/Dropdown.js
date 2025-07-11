import { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'

const Dropdown = ({ isOpen, setIsOpen, icon: ButtonIcon, options }) => {
  const dropdownRef = useRef(null)
  const menuRef = useRef(null)
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const clickToClose = event => {
    if (!menuRef.current.contains(event.target) && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', clickToClose)
    return () => {
      document.removeEventListener('mousedown', clickToClose)
    }
  }, [])
  
  return (
    <div className={styles.dropdown}>
      <button className="icon-btn-alt caption-btn" type="button" onClick={toggleDropdown} ref={dropdownRef} aria-label="dropdown button" aria-haspopup="true" aria-expanded={isOpen}>
        {ButtonIcon && <div className={styles.icon}><ButtonIcon /></div>}
      </button>
      <menu className={isOpen ? styles.open : styles.closed} ref={menuRef} aria-hidden={!isOpen}>
        {options.map(({ icon: Icon, label, onClick }, index) => (
          <li key={index} onClick={onClick} role="menuitem">
            {Icon && <div className={styles.icon}><Icon /></div>} 
            <div>{label}</div>
          </li>
        ))}
      </menu>
    </div>
  )
}

export default Dropdown
