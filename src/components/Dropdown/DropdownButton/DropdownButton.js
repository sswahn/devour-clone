import EllipsisVerticalIcon from '../../Icons/EllipsisVerticalIcon/EllipsisVerticalIcon'
import styles from './DropdownButton.module.css'

function DropdownButton({ id, label, isOpen, open, close, buttonRef }) {

  const action = () => {
    isOpen ? close() : open()
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
    <button 
      id={`dropdown-button-${id}`}
      className={styles.dropdownButton}
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
  )
}

export default DropdownButton
