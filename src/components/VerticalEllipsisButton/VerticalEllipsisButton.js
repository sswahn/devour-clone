import VerticalEllipsisIcon from './Icons/VerticalEllipsisIcon/VerticalEllipsisIcon'
import styles from './VerticalEllipsisButton.module.css'

function VerticalEllipsisButton() {

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
    <button className={styles.verticalEllipsisButton} onClick={onClick} onKeyDown={onKeyDown} type="button">
      <VerticalEllipsisIcon />
    </button>
  )
}

export default VerticalEllipsisButton
