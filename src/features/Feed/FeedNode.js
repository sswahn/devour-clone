import { useRef } from 'react'
import styles from './feed.module.css'

function FeedNode({ item, index, count }) {
  const ref = useRef()
  
  return (
    <article className={styles.feedNode} aria-posinset={index} aria-setsize={count}>
      <header>{/* user icon name etc. */}</header>
        <figure>
          <video ref={ref} src={item.video} preload="metadata" muted playsInline loop />
          {item.caption ?? <figcaption>{item.caption}</figcaption>}
        </figure>
      <footer>{/* likes comments etc. */}</footer>
    </article>
  )
}

export default FeedNode
