import { useRef } from 'react'
import LikeButton from './LikeButton/LikeButton'
import styles from './feed.module.css'

function FeedNode({ item, index, count }) {
  const ref = useRef()
  
  return (
    <article className={styles.feedNode} tabIndex={index} aria-posinset={index} aria-setsize={count}>
      <header>
{/*
        <AuthorButton />
        <LocationButton />
*/}
      </header>
        <figure>
          <video ref={ref} src={item.videoUrl} preload="metadata" muted playsInline loop />
          {item.caption ?? <figcaption>{item.caption}</figcaption>}
        </figure>
      <footer>
        {/* likes, comments, views etc. */}
        <LikeButton likedByUser={item.likedByUser} /> {item.likeCount}
{/*
        <CommentsButton /> {item.commentCount}
        <ShareButton />
*/}
      </footer>
    </article>
  )
}

export default FeedNode
