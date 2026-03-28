import { useState, useRef, useEffect, memo } from 'react'
import server from '../../utilities/server'
import database from '@sswahn/database'
import scroll from '../../utilities/scrollEngine'
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
  

  const update = ({ deltaY, direction, velocity }) => {
    
    const container = feedRef.current
    if (!container && !container.children.length) {
      return console.warn('container or container.children do not exist.')
    }
    
    const nodes = Array.from(container.children)

    console.log('nodes: ', nodes)

    console.log('velocity in feed: ', velocity)
    
    const highVelocityThreshold = 20 // to be determined
    
    if (direction === 'down' && velocity > highVelocityThreshold) {
      nodeIdex.current = nodeIdex.current + 3
    }
    if (direction === 'down' && velocity < highVelocityThreshold) {
      nodeIdex.current = nodeIdex.current + 1
    }
    
    if (direction === 'up' && velocity > highVelocityThreshold) {
      nodeIdex.current = nodeIdex.current - 3
    }
    if (direction === 'up' && velocity < highVelocityThreshold) {
      nodeIdex.current = nodeIdex.current - 1
    }

    const targetNode = nodes[nodeIdex.current]

    console.log('targetNode: ', targetNode)

    container.scrollTo({
      top: targetNode.offsetTop,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const unsubscribe = scroll.subscribe(update)
    return () => {
      unsubscribe()
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
