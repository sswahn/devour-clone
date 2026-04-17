import styles from './ListItemButton.module.css'

function ListItemButton({ buttonRef, listRef, text, method, close }) {
  
  const focusPrev = button => {
    const prevButton = button.parentElement
    console.log('parentElement: ', prevButton)
    let prevSibling = prevButton.previousElementSibling
    console.log('previousElementSibling: ', prevSibling)
    let first = prevSibling.firstElementChild
    console.log('firstElementChild: ', first)
    
    first ? first.focus() : listRef.current.lastElementChild.firstElementChild.focus()
  }

  const focusNext = button => {
    const nextButton = button.parentElement
    console.log('parentElement: ', nextButton)
    let nextSibling = nextButton.nextElementSibling
    console.log('nextElementSibling: ', nextSibling)
    let first = nextSibling.firstElementChild
    console.log('firstElementChild', first)
    first ? first.focus() : listRef.current.firstElementChild.firstElementChild.focus()
  }

  const escape = () => {
    close()
    buttonRef.current.focus()
  }

  const onClick = event => {
    method()
  }

  const onKeyDown = event => {
    switch (event.key) {
      case 'Enter':
        event.preventDefault()
        return method()
      case 'Tab':
        return close()  // Standard behavior: Close menu if user tabs out
      case 'Escape':
        event.preventDefault()
        return escape() // Return focus to button on close
      case 'ArrowDown':
        event.preventDefault()
        return focusNext(event.target)
      case 'ArrowUp':
        event.preventDefault()
        return focusPrev(event.target)
      default:
        return
    }
  }
  
  return (
    <button className={styles.listItemButton} onClick={onClick} onKeyDown={onKeyDown} type="button" role="menuitem" tabIndex="-1">{text}</button>
  )
}

export default ListItemButton
