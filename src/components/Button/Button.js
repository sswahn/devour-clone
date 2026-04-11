import styles from './Button.module.css'

// if you find yourself rewriting html, perhaps you found a code smell

function Button({ icon, action, attributes }) {
  
  const onClick = event => {
    action()
  }

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      action()
    }
  }
  
  return (
    <button 
      type="button" 
      className={`${styles.button} ${attributes.className || ''}`} 
      onClick={onClick} 
      onKeyDown={onKeyDown} 
      {...attributes}>
      {icon}
    </button>
  )
}

export default Button
