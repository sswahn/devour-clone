import { useState, useContext, useEffect, Suspense, lazy } from 'react'
import { Context } from '../../Provider'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import Feed from '../../features/Feed/Feed'
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

      <div style={{ height: '8000px' }}></div>

  {/* <LoadingSpinner size="2em" /> */}
    
      <Feed />
    </main>
  )
}

export default Main
