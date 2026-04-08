import styles from './Profile.module.css'

function Profile({ closeProfile }) {

  const handleBlur = event => {
    // Ensure relatedTarget exists and check if focus left the container
    if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) {
      // Focus has left the container; refocus a specific element
      // actually instead of currentTarget, focus on the closeButton
      event.currentTarget.focus()
    }
  }

  const handleClose = event => {
    closeProfile()
  }
  
  return (
    <section className={styles.profile} role="dialog" aria-modal="true">
      <header>
        <button onClick={handleClose} type="button">
          
        </button>
        {/* close button, profile image, username, location, and follow button */}
      </header>
      <div>
        {/* feed */}
      </div>
    </section>
  )
}

export default Profile
