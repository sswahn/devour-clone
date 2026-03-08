
import styles from './feed.module.css'

function FeedNode({ item }) {

  return (
    <div className={styles.feedNode}>{item}</div>
  )
}

export default FeedNode
