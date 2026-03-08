
import styles from './feed.module.css'

function FeedNode({ item }) {

  return (
    <div className={styles.feedNode}>
      <video src={item.video} preload="metadata" muted playsInline loop>
    </div>
  )
}

export default FeedNode
