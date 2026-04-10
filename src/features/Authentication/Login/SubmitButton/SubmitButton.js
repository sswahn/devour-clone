import { memo } from 'react'
import CheckIcon from '../../../../components/Icons/CheckIcon/CheckIcon''
import ExclamationIcon from '../../../../components/Icons/ExclamationIcon/ExclamationIcon'
import styles from './styles.module.css'

const SubmitButton = memo(({ text, message, error, disabled }) => {
  return (
    <div>
      {message && (
        <div className={styles.success}>
          <CheckIcon />
          <span>{message}</span>
        </div>
      )}
      {error && (
        <div className={styles.error}>
          <ExclamationIcon />
          <span>{error}</span>
        </div>
      )}
      <button className={styles.submit} type="submit" disabled={disabled}>{text}</button>
    </div>
  )
})

export default SubmitButton
