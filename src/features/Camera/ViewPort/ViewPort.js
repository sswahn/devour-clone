import styles from './viewport.module.css'

function ViewPort({ videoRef }) {
  return (
    <video ref={videoRef} className={styles.viewPort} autoPlay muted playsInline aria-label="camera feed" aria-live="assertive"></video>
  )
}

export default ViewPort
