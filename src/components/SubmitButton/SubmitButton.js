import CircleCheckIcon from '../Icons/CircleCheckIcon/CircleCheckIcon'
import CircleExclamationIcon from '../Icons/CircleExclamationIcon/CircleExclamationIcon'

const SubmitButton = ({ text, message, error }) => {
  return (
    <div>
      {message && (
        <div className="submit-button-message">
          <CircleCheckIcon />
          <span>{message}</span>
        </div>
      )}
      {error && (
        <div className="submit-button-error">
          <CircleExclamationIcon />
          <span>{error}</span>
        </div>
      )}
      <button className="submit-button" type="submit">{text}</button>
    </div>
  )
}

export default SubmitButton
