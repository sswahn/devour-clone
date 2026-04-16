
function ListItemButton({ buttonRef, listRef, text, method, close }) {
  
  const focusPrevButton = target => {
    const button = target.parentElement.previousElementSibling.firstElementChild
    button ? button.focus() : listRef.current.lastElementChild.firstElementChild.focus()
  }

  const focusNextButton = target => {
    const button = target.parentElement.nextElementSibling.firstElementChild
    button ? button.focus() : listRef.current.firstElementChild.firstElementChild.focus()
  }

  const onKeyDown = event => {
    switch (event.key) {
      case 'Enter':
        return method()
      case 'Tab':
        return close()  // Standard behavior: Close menu if user tabs out
      case 'Escape':
        close()
        return buttonRef.current?.focus() // 2. Return focus to button on close
      case 'ArrowDown':
        event.preventDefault() // test with and without this (supposedly it keeps the screen from scrolling)
        return focusNextButton(event.target)
      case 'ArrowUp':
        event.preventDefault() // test with and without this (supposedly it keeps the screen from scrolling)
        return focusPrevButton(event.target)
      default:
        return
    }
  }
  
  return (
    <button onClick={onClick} onKeyDown={onKeyDown} type="button" role="menuitem" tabIndex="-1">{text}</button>
  )
}

export default ListItemButton
