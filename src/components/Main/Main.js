import { useState, useContext, useEffect, Suspense, lazy } from 'react'
import { Context } from '../../Provider'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import Feed from '../../features/Feed/Feed'
import Portal from '../Portal/Portal'
const Drawer = lazy(() => import('../../components/Drawer/Drawer'))
const Camera = lazy(() => import('../../features/Camera/Camera'))
import styles from './main.module.css'

import Modal from '../Modal/Modal'

function Main() {
  const [context, dispatch] = useContext(Context)
  const [cameraOpen, setCameraOpen] = useState(false)

//  useEffect(() => {
    
//  }, [context.camera])
  
  return (
    <main className={styles.main}>
      <Feed />
    
      {/* <Drawer /> */}

      <Portal>
        <Suspense fallback={loading}>
          {context.camera && <Camera />}
        </Suspense>
      </Portal>
    </main>
  )
}

export default Main
