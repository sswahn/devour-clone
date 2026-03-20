import { useState, useContext, useEffect, Suspense, lazy } from 'react'
import { Context } from '../../Provider'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import Feed from '../../features/Feed/Feed'
import Portal from '../Portal/Portal'
import BottomNavbar from '../../components/BottomNavbar/BottomNavbar'
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


  
  return (
    <main className={styles.main}>

      <div style={{height: '8000px', border: '1px dashed red'}}></div>
    
      <Feed />
      <BottomNavbar />

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
