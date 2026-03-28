import { useState, useRef, useEffect, memo } from 'react'
import { createObserver } from '../../observer'
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
  const observer = createObserver()

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

  const snapOnScroll = ({ deltaY, direction, velocity }) => {
    const container = feedRef.current
    if (!container && !container.children.length) {
      return console.warn('container or container.children do not exist.')
    }
    const nodes = Array.from(container.children)

    // console.log('velocity in feed: ', velocity)
    
    const highVelocityThreshold = 9 // to be determined
    
    if (direction === 'down' && deltaY > 350) { // && velocity > highVelocityThreshold) {
      nodeIndex.current += 3
    }
    if (direction === 'down' && deltaY > 350) { // && velocity < highVelocityThreshold) {
      nodeIndex.current += 1
    }
    
    if (direction === 'up' && deltaY > 350) { // && velocity > highVelocityThreshold) {
      nodeIndex.current -= 3
    }
    if (direction === 'up' && deltaY > 350) { // && velocity < highVelocityThreshold) {
      nodeIndex.current -= 1
    }

    const targetNode = nodes[nodeIndex.current]

    container.scrollTo({
      top: targetNode.offsetTop,
      behavior: 'smooth',
    })
  }

  const snapElement = entry => {
    console.log('entry: ', entry)
  }

  const observeNodes = () => {
    const deltaY = undefined
    const direction = undefined
    const velocity = undefined
    const container = feedRef.current
    if (!container && !container.children.length) {
      return console.warn('container or container.children do not exist.')
    }
    const nodes = Array.from(container.children)

    for (const element of nodes) {
      observer.observe(element, snapElement)
    }

    return {
      scrollData(data) {
        deltaY = data.deltaY 
        direction = data.direction 
        velocity = data.velocity
      }
    }
  }

  useEffect(() => {
    const { scrollData } = observeNodes()
    const unsubscribe = scroll.subscribe(scrollData)
    return () => {
      unsubscribe()
      observer.disconnect()
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
