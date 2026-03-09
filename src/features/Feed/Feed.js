import { useState } from 'react'
import SuggestionsNode from './SuggestionsNode'
import LoadMoreSentinel from './LoadMoreSentinel' // sentinel triggers infinite loading
import styles from './feed.module.css'

function Feed() {
  const [items, setItems] = useState([])

  const loadMore = () => {
    // fetch next batch from server
  }
  
  return (
    <div className={styles.feed}>
      <SuggestionsNode />
      {items.map((item, index) => {
        <FeedNode key={item.id} item={item} index={idex + 1} count={items.length} />
      })}
      <LoadMoreSentinel onVisible={loadMore} />
    </div>
  )
}
