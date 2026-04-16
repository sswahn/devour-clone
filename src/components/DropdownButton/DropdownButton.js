import EllipsisVerticalIcon from '../Icons/EllipsisVerticalIcon/EllipsisVerticalIcon'
import styles from './DropdownButton.module.css'

function DropdownButton() {

  const action = () => {
    // open dropdown list
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
    <button className={styles.dropdownButton} onClick={onClick} onKeyDown={onKeyDown} type="button" aria-label="open dropdown">
      <EllipsisVerticalIcon />
    </button>
  )
}

export default DropdownButton
