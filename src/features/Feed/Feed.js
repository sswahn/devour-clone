import { useState, useRef, useEffect, memo } from 'react'
import { createObserver } from '../../utilities/observer'
import scroll from '../../utilities/scrollEngine'
import server from '../../utilities/server'
import database from '@sswahn/database'
import FeedNode from './FeedNode'
import Sentinel from './Sentinel' // sentinel triggers infinite loading
import styles from './feed.module.css'

function Feed() {
  const [data, setData] = useState([1,2,3,4,5,6,7,8,9,10])
  const [batchNumber, setBatchNumber] = useState(0)
  const [loading, setLoading] = useState(false)
  const feedRef = useRef(null)
  const nodeIndex = useRef(0)

  const loadMoreData = async event => {
    const response = await server.get(`${config.api.feed}/${batchNumber}`)
    if (!response.error) {
      return alert(response.error)
    }
    
    setBatchNumber(response.message.batchNumber)
    setData({ ...data, ...response.message })
  }

  const loadFromStorage = async () => {
    const db = database()
    const video = await db.get('video')
    
    alert(JSON.stringify(video?.video))
    
    setData(video?.video)
  }

  // New Logic:
  // 1. Let user scroll freely
  // 2. Detect when scrolling stops
  // 3. Snap to closest node
  // That’s it.
 
  const snapElement = entry => {
    const element = entry.target

    console.log('element.offsetTop: ', element.offsetTop)
    
    feedRef.current.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    })
  }

  const connectObservers = () => {
    const observer = createObserver()
    const container = feedRef.current
    if (!container && !container.children.length) {
      return console.warn('container or container.children do not exist.')
    }
    const nodes = Array.from(container.children)
    for (const element of nodes) {
      observer.observe(element, snapElement)
    }
    return () => {
      observer.disconnect()
    }
  }

  useEffect(() => {
    const disconnectObservers = connectObservers()
    return () => {
      disconnectObservers()
    }
  }, [])
  
  return (
    <section ref={feedRef} className={styles.feed} role="feed" aria-busy={loading}>

      {data.map((item, index) => 
        <FeedNode key={index} item={item} index={index + 1} count={data.length} />
      )}
{/*
      {data.map((item, index) => {
        <FeedNode key={item.id} item={item} index={idex + 1} count={items.length} />
      })}
      <Sentinel onVisible={loadMoreData} />
*/}
    </section>
  )
}

export default Feed // memo(Feed)
