import { useState } from 'react'
import FeedNode from './FeedNode'
import Sentinel from './Sentinel' // sentinel triggers infinite loading
import styles from './feed.module.css'

function Feed() {
  const [data, setData] = useState([])

  const loadMoreData = () => {
    // fetch next batch from server
  }
  
  return (
    <section className={styles.feed} role="feed">
      {data.map((item, index) => {
        <FeedNode key={item.id} item={item} index={idex + 1} count={items.length} />
      })}
      <Sentinel onVisible={loadMoreData} />
    </section>
  )
}
