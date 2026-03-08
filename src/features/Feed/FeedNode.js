
import styles from './feed.module.css'

function FeedNode({ item }) {

  return (
    <div className={styles.feed_node}>{item}</div>
  )
}

export default FeedNode
