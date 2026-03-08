import { useRef }
import styles from './feed.module.css'

function FeedNode({ item }) {
  const ref = useRef()
  
  return (
    <div className={styles.feedNode}>
      <video ref={ref} src={item.video} preload="metadata" muted playsInline loop />
    </div>
  )
}

export default FeedNode
