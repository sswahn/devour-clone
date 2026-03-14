import { useState, useContext, Suspense, lazy } from 'react'
import { Context } from '../../Provider'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import Feed from '../../features/Feed/Feed'
import Portal from '../Portal/Portal'
const Camera = lazy(() => import('../../features/Camera/Camera'))
import styles from './main.module.css'

import Modal from '../Modal/Modal'

function Main() {
  const [context, dispatch] = useContext(Context)
  const [cameraOpen, setCameraOpen] = useState(false)
      
  return (
    <main className={styles.main}>
      <span>Main Component</span>
  {/* <Feed /> */}
    
      {/* <Drawer /> */}

{/*
      <Portal>
        <Suspense fallback={loading}>
          {cameraOpen && <Camera />}
        </Suspense>
      </Portal>
*/}
    </main>
  )
}

export default Main
