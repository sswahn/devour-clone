import { useRef } from 'react'
import LikeButton from './LikeButton'
import styles from './feed.module.css'

function FeedNode({ item, index, count }) {
  const ref = useRef()
  
  return (
    <article className={styles.feedNode} tabIndex={index} aria-posinset={index} aria-setsize={count}>
      <header>{/* user icon name etc. maybe the location should be the title <h2>? */}</header>
        <figure>
          <video ref={ref} src={item.video} preload="metadata" muted playsInline loop />
          {item.caption ?? <figcaption>{item.caption}</figcaption>}
        </figure>
      <footer>
        {/* likes, comments, views etc. */}
        <LikeButton likedByUser={item.likedByUser} />
      </footer>
    </article>
  )
}

export default FeedNode
