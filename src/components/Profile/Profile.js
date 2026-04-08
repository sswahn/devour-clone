import styles from './Profile.module.css'

function Profile({ closeProfile }) {

  // use sentinel focus trap pattern
  // use useEffect to load initial focus on load,

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
