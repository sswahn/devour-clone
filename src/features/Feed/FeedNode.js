import { useRef, memo } from 'react'
import LikeButton from './LikeButton/LikeButton'
import styles from './feed.module.css'

function FeedNode({ item, index, count }) {

  const data = {
    videoUrl: item.videoUrl || '',
    caption: item.caption || ''
  }
  
  return (
    <article className={styles.feedNode} tabIndex={index} aria-posinset={index} aria-setsize={count} style={{
        background: '#888',
        borderRadius: '10px',
        maxWidth: '500px',
        margin: '0 auto 8px auto',
        height: '100dvh',
        width: '100dvw'
    }}>
      <header>
{/*
        <AuthorButton />
        <LocationButton />

        Change 'data' back to 'item'
*/}
      </header>
        <figure style={{ background: '#666', borderRadius: '10px', height: '100%', width: '100%' }}>
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

export default FeedNode // memo(FeedNode)
