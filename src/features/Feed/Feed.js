import { useState } from 'react'
import SuggestionsNode from './SuggestionsNode'
import LoadMoreSentinel from './LoadMoreSentinel' // sentinel triggers infinite loading
import styles from './feed.module.css'

function Feed() {
  const [data, setData] = useState([])

  const loadMoreData = () => {
    // fetch next batch from server
  }
  
  return (
    <section className={styles.feed} role="feed">
      <SuggestionsNode />
      {data.map((item, index) => {
        <FeedNode key={item.id} item={item} index={idex + 1} count={items.length} />
      })}
      <LoadMoreSentinel onVisible={loadMoreData} />
    </section>
  )
}
