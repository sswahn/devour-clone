import { useState, useEffect, memo } from 'react'
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
  const nodeRef = useRef(null)

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


  
  const snapWithVelocity = (container, velocity) => {
    if (!container) return;
    const nodes = Array.from(container.children);
    if (!nodes.length) return;

    const scrollTop = container.scrollTop;
    let nearestIndex = 0;
    let minDistance = Math.abs(nodes[0].offsetTop - scrollTop);

    nodes.forEach((node, i) => {
      const distance = Math.abs(node.offsetTop - scrollTop - headerHeight);
      if (distance < minDistance) {
        minDistance = distance;
        nearestIndex = i;
      }
    })

    // Determine target node based on velocity
    let targetIndex = nearestIndex;
    if (Math.abs(velocity) > velocityThreshold) {
      const direction = velocity > 0 ? 1 : -1; // down or up
      targetIndex = nearestIndex + direction * maxFlickNodes;

      // Clamp to available nodes
      targetIndex = Math.max(0, Math.min(nodes.length - 1, targetIndex));
    }

    const targetNode = nodes[targetIndex];
    if (!targetNode) return;

    container.scrollTo({
      top: targetNode.offsetTop - headerHeight,
      behavior: 'smooth',
    });
  }

  const update = ({ deltaY, direction, velocity }) => {
    return
  }

  useEffect(() => {
    const unsubscribe = scroll.subscribe(update)
    return () => {
      unsubscribe()
    }
  }, [])
  
  return (
    <section className={styles.feed} role="feed" aria-busy={loading}>

      {data.map((item, index) => 
        <FeedNode key={index} nodeRef={nodeRef} item={item} index={index + 1} count={data.length} />
      )}
{/*
      {data.map((item, index) => {
        <FeedNode key={item.id} nodeRef={nodeRef} item={item} index={idex + 1} count={items.length} />
      })}
      <Sentinel onVisible={loadMoreData} />
*/}
    </section>
  )
}

export default memo(Feed)
