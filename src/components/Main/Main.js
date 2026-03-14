import { useState, useContext, useEffect, Suspense, lazy } from 'react'
import { Context } from '../../Provider'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import Feed from '../../features/Feed/Feed'
import Portal from '../Portal/Portal'
const Camera = lazy(() => import('../../features/Camera/Camera'))
import styles from './main.module.css'

import Modal from '../Modal/Modal'

const Main = () => {
  const [context, dispatch] = useContext(Context)
  const [cameraOpen, setCameraOpen] = useState(false)
      
  return (
    <main className={styles.main}>
      <Feed />
      {/* <Drawer /> */}

{/*
      <Portal>
        {cameraOpen && <Camera />}
      </Portal>
*/}
    </main>
  )
}

export default Main
