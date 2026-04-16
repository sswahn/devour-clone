import EllipsisVerticalIcon from './Icons/EllipsisVerticalIcon/EllipsisVerticalIcon'
import styles from './EllipsisVerticalButton.module.css'

function EllipsisVerticalButton() {

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
    <button className={styles.ellipsisVerticalButton} onClick={onClick} onKeyDown={onKeyDown} type="button">
      <EllipsisVerticalIcon />
    </button>
  )
}

export default EllipsisVerticalButton
