import { useRef, memo } from 'react'
import CheckedIcon from '../Icons/CheckboxIcon/CheckedIcon.js'
import UncheckedIcon from '../Icons/CheckboxIcon/UncheckedIcon.js'
import styles from './Checkbox.module.css'

const Checkbox = memo(({ label, checked, onChange }) => {
  const checkboxRef = useRef(null)

  const action = () => {
    checkboxRef.current.click()
  }

  const onClick = event => {
    action()
  }

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      action()
    }
  }

  // the icons should be conditionally rendered in a button
  // it should receive the onClick and onKeyDown methods as props
  
  return (
    <button className={styles.checkbox}>
      <label onClick={onClick} onKeyDown={onKeyDown}>{label}</label>
      <input ref={checkboxRef} type="checkbox" checked={checked} onChange={onChange} />
  
      {checked ? <CheckedIcon /> : <UncheckedIcon />}
  
    </button>
  )
})

export default Checkbox
