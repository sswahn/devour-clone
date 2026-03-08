import { useState } from 'react'
import SuggestionsNode from './SuggestionsNode'
import LoadMoreSentinel from './LoadMoreSentinel' // sentinel triggers infinite loading

function Feed() {
  const [items, setItems] = useState([])

  const loadMore = () => {
    // fetch next batch from server
  }
  
  return (
    <div className="feed">
      <SuggestionsNode />
      {items.map(item => {
        <FeedNode key={item.id} item={item} />
      })}
      <LoadMoreSentinel onVisible={loadMore} />
    </div>
  )
}
