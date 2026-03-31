import { useState, useRef, useCallback, memo } from 'react'
import { useScrollContext } from '../../hooks/useScrollContext'
import scroll from '../../utilities/scrollEngine'
import server from '../../utilities/server'
import database from '@sswahn/database'
import FeedNode from './FeedNode'
import Sentinel from './Sentinel' // sentinel triggers infinite loading
import styles from './feed.module.css'

function Feed() {
  const scrollRef = useScrollContext(ref => ref.current && scroll.setElement(ref.current))
  const [data, setData] = useState([1,2,3])
  const [batchNumber, setBatchNumber] = useState(0)
  const [loading, setLoading] = useState(false)

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

  // must be a button to open fullscreen
  // add it to feedNode overlay nav
  
  //  make a Provider to handle the scrollRef element context
  // and for hiding the header and maybe the bottom nav on fullscreen
  
  const handleNodeClick = async event => {
    try {
      await (document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullscreen)?.()
      await screen.orientation.lock('portrait')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section ref={scrollRef} className={styles.feed} role="feed" aria-busy={loading}>
    {/*
      <div style={{
        background: '#777',
        color: 'white',
        height: '50dvh',
        width: '100dvw',
        maxWidth: '500px',
        paddingTop: '100px',
        margin: '0 auto 16px auto'
      }}>suggestions</div>
    */}
    
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
