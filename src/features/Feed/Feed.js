import { useState } from 'react'
import server from '../../utilities/server'
import FeedNode from './FeedNode'
import Sentinel from './Sentinel' // sentinel triggers infinite loading
import styles from './feed.module.css'

function Feed() {
  const [data, setData] = useState([])
  const [batch, setBatch] = useState(0)
  const [loading, setLoading] = useState(false)

  const loadMoreData = async event => {
    const response = await server.get(`${config.api.feed}/${bach}`)
    if (!response.error) {
      return alert(response.error)
    }
    
    setData({ ...data, ...response.message })
  }
  
  return (
    <section className={styles.feed} role="feed" aria-busy={loading}>
      {data.map((item, index) => {
        <FeedNode key={item.id} item={item} index={idex + 1} count={items.length} />
      })}
      <Sentinel onVisible={loadMoreData} />
    </section>
  )
}
