import { useRef, memo } from 'react'
import LikeButton from './LikeButton/LikeButton'
import styles from './feed.module.css'

function FeedNode({ item, index, count }) {
  const ref = useRef()

  const data = {
    videoUrl: item.videoUrl || '',
    caption: item.caption || ''
  }
  
  return (
    <article className={styles.feedNode} tabIndex={index} aria-posinset={index} aria-setsize={count}>
      <header>
{/*
        <AuthorButton />
        <LocationButton />

        Change 'data' back to 'item'
*/}
      </header>
        <figure style={{ height: '766px', width: '411px', border: '1px dashed red', borderRadius: '10px' }}>
          {data.videoUrl && <video ref={ref} src={data.videoUrl} preload="metadata" muted playsInline loop />}
          {data.caption ?? <figcaption>{data.caption}</figcaption>}
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
