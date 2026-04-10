import styles from './LandingUI.module.css'

function LandingUI() {
  return (
    <section className={styles.landingUI}>
      <button className={styles} onClick={onClick} onKeyDown={onKeyDown} type="text" aria-label="sign in">Sign In</button>
      <button className={styles} onClick={onClick} onKeyDown={onKeyDown} type="text" aria-label="sign up">Sign Up</button>
      <hr />
      <button className={styles} onClick={onClick} onKeyDown={onKeyDown} type="text" aria-label="sign in with Google">Sign in with Google</button>
      <button className={styles} onClick={onClick} onKeyDown={onKeyDown} type="text" aria-label="sign in with Apple">Sign in with Apple</button>
    </section>    
  )
}

export default LandingUI
