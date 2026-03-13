import { useState, useContext, useEffect, Suspense, lazy } from 'react'
import { Context } from '../../Provider'
import database from '@sswahn/database'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import Portal from './Portal/Portal'
const Camera = lazy(() => import('./features/Camera/Camera')

import Modal from '../Modal/Modal'

const Main = () => {
  const [context, dispatch] = useContext(Context)
  const [cameraOpen, setCameraOpen] = useState(false)
      
  return (
    <main>
      <Feed />
      {/* <Drawer /> */}
      <Portal>
        {cameraOpen && <Camera />}
      </Portal>
    </main>
  )
}

export default Main
