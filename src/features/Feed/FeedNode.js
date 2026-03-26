import { useRef, memo } from 'react'
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
        <figure style={{ height: '766px', width: '411px', border: '1px dashed red', borderRadius: '10px' }}>
          {item.videoUrl && <video ref={ref} src={item.videoUrl} preload="metadata" muted playsInline loop />}
          {item.caption ?? <figcaption>{item.caption}</figcaption>}
        </figure>
      <footer>
{/*
        <LikeButton likedByUser={item.likedByUser} /> {item.likeCount}
        <CommentsButton /> {item.commentCount}
        <ShareButton />
*/}
      </footer>
    </article>
  )
}

export default memo(FeedNode)
