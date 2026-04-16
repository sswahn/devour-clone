import { useState, useRef, useEffect, Suspense, lazy } from 'react'
import DropdownButton from './DropdownButton/DropdownButton'
const DropdownList = lazy(() => import('./DropdownList/DropdownList'))
import styles from './Dropdown.module.css'

function Dropdown({ id = 0, label = 'dropdown', items }) {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef(null)

  const close = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    return () => {
      setIsOpen(false)
    }
  }, [])

  return (
    <div　className={styles.dropdown}>
      <DropdownButton id={id} label={label} isOpen={isOpen} setIsOpen={setIsOpen} buttonRef={buttonRef} /> 
      <Suspense fallback={null}>
        {isOpen && <DropdownList id={id} isOpen={isOpen} close={close} items={items} buttonRef={buttonRef} />}
      </Suspense>
    </div>
  )
}

export default Dropdown
