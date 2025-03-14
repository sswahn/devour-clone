import { useEffect, useRef } from 'react'
import styles from './styles.module.css'

const Modal = ({ className, open, onClose, children }) => {
  const dialogRef = useRef(null)
  
  const openModal = () => {
    dialogRef.current.showModal()
  }
  
  const closeModal = event => {
    onClose && onClose()
    dialogRef.current.close()
  }

  const clickToClose = event => {
    console.log('click to close: ', event.target.parentElement)
    console.log('event.target.parentElement === dialogRef.current', event.target.parentElement === dialogRef.current)
    
    if (event.target.parentElement === dialogRef.current) {
      closeModal()
    }
  }
  
  const toggleModal = () => {
    open ? openModal() : closeModal()
  }
  
  useEffect(() => {
    toggleModal()
  }, [open])

  useEffect(() => {
    document.addEventListener('mousedown', clickToClose)
    return () => {
      document.removeEventListener('mousedown', clickToClose)
    }
  }, [])
  
  
  return (
    <dialog className={`${styles.modal} ${className || ''}`} ref={dialogRef}>
      <div className={styles.content}>{children}</div>
    </dialog>
  )
}

export default Modal
