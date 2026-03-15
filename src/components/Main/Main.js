import { useState, useContext, useEffect, Suspense, lazy } from 'react'
import { Context } from '../../Provider'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import Feed from '../../features/Feed/Feed'
import Portal from '../Portal/Portal'
const Drawer = lazy(() => import('../../components/Drawer/Drawer'))
//const Camera = lazy(() => import('../../features/Camera/Camera'))
import Camera from '../../features/Camera/Camera'

import styles from './main.module.css'

function Main() {
  const [context, dispatch] = useContext(Context)
  //const [cameraOpen, setCameraOpen] = useState(false)

//  useEffect(() => {
    
//  }, [context.camera])
  
  return (
    <main className={styles.main}>
      
      <Feed />

      <Portal>
        {context.camera && <Camera />}
{/*
        <Suspense fallback={<LoadingSpinner />}>
          {context.camera && <Camera />}
        </Suspense>
*/}
        <Suspense fallback={<LoadingSpinner />}>
          {context.drawer && <Drawer />}
        </Suspense>
      </Portal>
    </main>
  )
}

export default Main
