import { useRef, memo } from 'react'
import CheckedIcon from '../Icons/CheckboxIcon/CheckedIcon.js'
import UncheckedIcon from '../Icons/CheckboxIcon/UncheckedIcon.js'
import styles from './styles.module.css'

const Checkbox = memo(({ className, label, checked, onChange }) => {
  const checkboxRef = useRef(null)

  const handleClick = event => {
    checkboxRef.current.click()
  }
  
  return (
    <button className={`${styles.checkbox} ${className || ''}`}>
      <label onClick={handleClick}>{label}</label>
      <input ref={checkboxRef} type="checkbox" checked={checked} onChange={onChange} />
      {checked ? <CheckedIcon /> : <UncheckedIcon />}
    </button>
  )
})

export default Checkbox
