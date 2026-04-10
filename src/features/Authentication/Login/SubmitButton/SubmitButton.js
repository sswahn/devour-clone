import { memo } from 'react'
import CheckIcon from '../../../../components/Icons/CheckIcon/CheckIcon''
import ExclamationIcon from '../../../../components/Icons/ExclamationIcon/ExclamationIcon'
import styles from './styles.module.css'

const SubmitButton = memo(({ text, message, error, disabled }) => {
  return (
    <div> 
    {/* login shouldnt have success message, just open a loading screen while feed loads, no need to message success */}
    {/* registration can have success message, but it shouldnt be part of button component. */}
      {message && (
        <div className={styles.success}>
          <CheckIcon />
          <span>{message}</span>
        </div>
      )}
   {/* move error message outside of button component */}
      {error && (
        <div className={styles.error}>
          <ExclamationIcon />
          <span>{error}</span>
        </div>
      )}
      <button className={styles.submit} type="submit" disabled={disabled} aria-label="">{text}</button>
    </div>
  )
})

export default SubmitButton
