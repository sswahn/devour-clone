
function Button({ Icon, action, attributes }) {
  
  const onClick = event => {
    action()
  }

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      action()
    }
  }
  
  return (
    <button type="button" onClick={onClick} onKeyDown={onKeyDown}  {...attributes}>{<Icon />}</button>
  )
}

export default Button
