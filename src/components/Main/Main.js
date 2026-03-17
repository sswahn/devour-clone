import { useState, useContext, useEffect, Suspense, lazy } from 'react'
import { Context } from '../../Provider'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import Feed from '../../features/Feed/Feed'
import Portal from '../Portal/Portal'
const Sidebar = lazy(() => import('../../components/Sidebar/Sidebar'))
const Drawer = lazy(() => import('../../components/Drawer/Drawer'))
const Camera = lazy(() => import('../../features/Camera/Camera'))
import styles from './main.module.css'

function Main() {
  const [context, dispatch] = useContext(Context)
  //const [cameraOpen, setCameraOpen] = useState(false)

//  useEffect(() => {
    
//  }, [context.camera])

// context updates rerender all components consuming any value in Context...
  // refactor context
  const loadFromStorage = async () => {
    const video = await db.get('video')
    const totalDuration = video?.duration.reduce((acc, val) => acc + val, 0)
    dispatch({ type: 'video', payload: video?.video || [] })
    setData(video?.video)
  }

  
  return (
    <main className={styles.main}>
      
      <Feed />

      <Suspense fallback={<LoadingSpinner />}>
        {context.camera && <Camera />}
      </Suspense>
    
      <Portal>
        <Suspense fallback={<LoadingSpinner />}>
          {context.sidebar && <Sidebar />}
        </Suspense>
        
        {/*
        <Suspense fallback={<LoadingSpinner />}>
          {context.drawer && <Drawer />}
        </Suspense>
        */}
      </Portal>
    </main>
  )
}

export default Main
