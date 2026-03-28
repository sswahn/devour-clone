import { useRef, memo } from 'react'
import LikeButton from './LikeButton/LikeButton'
import styles from './feed.module.css'

function FeedNode({ ref, item, index, count }) {

  const data = {
    videoUrl: item.videoUrl || '',
    caption: item.caption || ''
  }
  
  return (
    <article ref={ref} className={styles.feedNode} tabIndex={index} aria-posinset={index} aria-setsize={count} style={{
        background: '#888',
        borderRadius: '10px',
        marginBottom: '8px'
    }}>
      <header>
{/*
        <AuthorButton />
        <LocationButton />

        Change 'data' back to 'item'
*/}
      </header>
        <figure style={{ background: '#666', borderRadius: '10px', height: '766px', width: '411px' }}>
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
