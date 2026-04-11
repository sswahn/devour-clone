
function Button({ text, action, attributes }) {
  
  const onClick = event => {
    action()
  }

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      action()
    }
  }
  
  return (
    <button {...attributes}>{text}</button>
  )
}

export default Button
